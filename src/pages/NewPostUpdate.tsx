import React, { FormEvent, useEffect, useRef, useState } from 'react';
import PostsUpdateForm, {
  PostsUpdateFormInputValues,
} from '../ui-components/PostsUpdateForm';
import { Text, Button } from '@aws-amplify/ui-react';
import { useNavigate, useParams, redirect } from 'react-router-dom';
import { API, Storage } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import { getPosts, listImagePosts, getImagePost } from '../graphql/queries';
import styled from 'styled-components';
import { createPosts, deletePosts, updatePosts } from '../graphql/mutations';

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  //flex-direction: column;
  padding: 2rem 4rem;

  .form-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .post-create-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    height: 640px;
    border: 1px solid black;
  }
`;

const NewPostUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [filePath, setFilePath] = useState<string>('');
  const [file, setFile] = useState<File | undefined>(undefined);
  const [img, setImg] = useState<string>('');
  const submitRef = useRef();

  async function getPost() {
    const { results } = await Storage.list('notice/', { level: 'public' });
    console.log(results);

    const post = await API.graphql({
      query: getPosts,
      variables: { id: params.id },
    });
    const { data } = { ...post } as any;
    // const { a } = { data.getPost() };
    const { title, desc, createdAt, type: postType } = data.getPosts;
    setTitle(title);
    setDesc(desc);
    setCreatedAt(createdAt);
    setType(postType);

    const fileKey = `${type.toLowerCase()}/${title}`;
    const url = await Storage.get(fileKey);
    // console.log(url, fileKey);
    console.log(fileKey, url);
    setImg(url);
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id: params.id,
      title: title,
      desc: desc,
      createdAt: createdAt,
      type: type,
    };
    console.log(data);
    const updatePost = await API.graphql({
      query: updatePosts,
      variables: { input: data },
    });
  };

  const onDelete = async () => {
    //
    console.log(mutations);
    const deletedTodo = await API.graphql({
      query: deletePosts,
      variables: { input: { id: params.id } },
    });
    navigate('/login');
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <ContainerStyle>
      <div>
        <img width="400px" src={img} alt="img" />
      </div>
      <div className="form-wrapper">
        <form className="post-create-form" onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              name="title"
              onChange={onTitleChange}
              value={title}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="textarea">게시글</label>
            <textarea name="textarea" onChange={onDescChange} value={desc} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="file">파일</label>
            <input
              type="file"
              name="file"
              // onChange={onFileSelect}
            />
          </div>
          <div className="input-wrapper">
            <Button onClick={onDelete}>삭제</Button>
            <Button>clear</Button>
            <input type="submit" className="input-btn" />
          </div>
        </form>
      </div>
    </ContainerStyle>
  );
};

export default NewPostUpdate;
