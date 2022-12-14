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
  flex-direction: column;
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

  .input-wrapper {
    display: flex;
    gap: 8px;
    padding: 10px;
  }

  .input-btn {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 8px 16px;
  }
`;

const NewPostUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [version, setVersion] = useState<number>(0);
  const [postFilePath, setPostFilePath] = useState<string>('');
  const [file, setFile] = useState<File | undefined>(undefined);
  const [img, setImg] = useState<string>('');
  const submitRef = useRef();

  async function getPost() {
    const { results } = await Storage.list('notice/', { level: 'public' });
    console.log('results: ', results);

    const post = await API.graphql({
      query: getPosts,
      variables: { id: params.id },
    });
    const { data } = { ...post } as any;
    const {
      id,
      title,
      desc,
      createdAt,
      type: postType,
      _version,
      filePath,
    } = data.getPosts;
    setTitle(title);
    setDesc(desc);
    setCreatedAt(createdAt);
    setType(postType);
    setVersion(_version);
    setPostFilePath(filePath);
    console.log('filepath', filePath);

    const fileKey = `${postType.toLowerCase()}/${filePath}`;
    const url = await Storage.get(fileKey);
    // console.log(url, fileKey);
    console.log(fileKey, url);
    console.log('post', data.getPosts);
    url && setImg(url);
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
      filePath: postFilePath,
      _version: version,
    };

    const updatePost = await API.graphql({
      query: updatePosts,
      variables: { input: data },
    });

    if (file) {
      const { key } = await Storage.put(postFilePath, file, {
        contentType: 'image/*',
        level: 'public',
        customPrefix: {
          public: type === 'NOTICE' ? 'public/notice/' : 'public/report/',
        },
      });
    }

    navigate(`/post/${type}`);
  };

  const onDelete = async () => {
    //
    console.log(params.id, version);
    try {
      const deletedTodo = await API.graphql({
        query: deletePosts,
        variables: { input: { id: params.id, _version: version } },
      });
    } catch (e) {
      console.log('delete error: ', e);
    }
    navigate(`/post/${type}`);
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target ? e.target?.files : null;
    console.log('file', selectFile);
    const file = selectFile
      ? selectFile[0]
        ? selectFile[0]
        : undefined
      : undefined;
    if (file) {
      setFile(file);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <ContainerStyle>
      <div>
        <Button onClick={() => navigate('/login')}>
          ????????? ????????? ???????????? ????????????
        </Button>
      </div>
      <div>
        {type === 'NOTICE' ? (
          <div>
            <img width="400px" src={img} alt="img" />
          </div>
        ) : (
          <div>report</div>
        )}

        <div className="form-wrapper">
          <form className="post-create-form" onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="title">??????</label>
              <input
                style={{ width: '400px' }}
                type="text"
                name="title"
                onChange={onTitleChange}
                value={title}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="textarea">?????????</label>
              <textarea
                name="textarea"
                onChange={onDescChange}
                value={desc}
                style={{ width: '400px', height: '320px', resize: 'none' }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="file">??????</label>
              <input type="file" name="file" onChange={onFileSelect} />
            </div>
            <div className="input-wrapper">
              <Button onClick={onDelete}>??????</Button>
              <Button>clear</Button>
              <input type="submit" className="input-btn" />
            </div>
          </form>
        </div>
      </div>
    </ContainerStyle>
  );
};

export default NewPostUpdate;
