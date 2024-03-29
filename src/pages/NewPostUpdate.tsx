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
import { child, get, ref, set, push, update, remove } from 'firebase/database';
import { database } from '../firebase';
import { data } from 'autoprefixer';

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
  const [filename, setFilename] = useState('');
  const submitRef = useRef();

  async function getPost() {
    const id = params.id;

    const dbRef = ref(database);
    get(child(dbRef, `posts/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val(), id);
          const result = snapshot.val();
          setTitle(result.title);
          setDesc(result.desc);
          setCreatedAt(result.createdAt);
          setType(result.postType);
          setPostFilePath(result.filePath);
          setFilename(result.fileName);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = params?.id ? params.id : '000';
    if (id === '000') return;

    const postData = {
      id: id,
      title: title,
      desc: desc,
      createdAt: createdAt,
      type: type ? type : 'none',
      filePath: postFilePath,
      filename: filename ? filename : 'none',
    };

    const newPostKey = push(child(ref(database), 'posts')).key;
    if (newPostKey) {
      const updates: any = {};
      updates[`/posts/${newPostKey}`] = postData;

      return update(ref(database), updates);
    }

    navigate(`/post/${type}`);
  };

  const onDelete = async () => {
    const id = params?.id ? params.id : '000';
    if (id === '000') return;

    const deleteRef = ref(database, 'posts/' + id);
    await remove(deleteRef);
    console.log(type);

    alert('삭제되었습니다.');

    navigate(`/login`);
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target ? e.target?.files : null;
    const file = selectFile
      ? selectFile[0]
        ? selectFile[0]
        : undefined
      : undefined;
    if (file) {
      setFile(file);
      setFilename(file.name);
    }
  };

  useEffect(() => {
    getPost();
    console.log('type', type);
  }, []);

  return (
    <ContainerStyle>
      <div>
        <Button onClick={() => navigate('/login')}>
          관리자 페이지 메인으로 돌아가기
        </Button>
      </div>
      <div>
        {type === 'NOTICE' ? (
          <div>{img && <img width="400px" src={img} alt="img" />}</div>
        ) : (
          <div>report</div>
        )}

        <div className="form-wrapper">
          <form className="post-create-form" onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="title">제목</label>
              <input
                style={{ width: '400px' }}
                type="text"
                name="title"
                onChange={onTitleChange}
                value={title}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="textarea">게시글</label>
              <textarea
                name="textarea"
                onChange={onDescChange}
                value={desc}
                style={{ width: '400px', height: '320px', resize: 'none' }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="file">파일</label>
              <input type="file" name="file" onChange={onFileSelect} />
            </div>
            <div className="input-wrapper">
              <Button onClick={onDelete}>삭제</Button>
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
