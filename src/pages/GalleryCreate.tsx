import React, { useEffect, useState } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
import { listImagePosts, listPosts } from '../graphql/queries';
import { ImagePostCreateFormInputValues } from '../ui-components/ImagePostCreateForm';
import styled from 'styled-components';
import { Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  type: string;
}

const ContainerStyle = styled.div`
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & form {
    border: 1px solid black;
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .textarea {
      width: 500px;
      height: 200px;
      border-radius: 4px;
      border: 1px solid gray;
      padding: 4px;
    }
  }

  .list-btn {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .imglist-wrapper {
    padding: 2rem;
    display: flex;
    //flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .img-items {
    display: flex;
    gap: 8px;
    width: 480px;

    .item-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .btn-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const GalleryCreate = ({ type }: PropsType) => {
  const navigate = useNavigate();
  const [list, setList] = useState<{ url: string; key: string | undefined }[]>(
    []
  );
  const [createdAt, setCreatedAt] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState<File>();
  // const [urlList, setUrlList] = useState<string[]>([]);
  const urlList: string[] = [];
  const [refresh, setRefresh] = useState(false);

  // https://stackoverflow.com/questions/73074928/aws-amplify-upload-files-best-practices
  const uploadImagePost = async (
    file: File,
    inputDesc: string,
    inputCreatedAt: string
  ) => {
    const { key } = await Storage.put(inputDesc, file, {
      contentType: 'image/*',
      level: 'public',
      customPrefix: { public: type === 'WCO' ? 'public/wco/' : 'public/etc/' },
    });
  };

  const getList = async () => {
    const { results } = await Storage.list(type === 'WCO' ? 'wco/' : 'etc/', {
      level: 'public',
    });
    const keys: { url: string; key: string | undefined }[] = [];
    for (const file of results) {
      const key = file.key;
      const url = await Storage.get(file.key ? file.key : '');
      keys.push({ url: url, key: key });
    }

    setList(keys);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files ? e.target.files[0] : null;
    img && setImage(img);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (image && desc) {
      uploadImagePost(image, desc, createdAt);
      setRefresh(!refresh);
      // window.location.reload();'
      setTimeout(() => window.location.reload(), 500);
    } else {
      alert('항목을 모두 작성해주세요.');
    }
  };

  const onDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: string
  ) => {
    //
    await Storage.remove(key);
    setTimeout(() => window.location.reload(), 500);
  };

  useEffect(() => {
    getList();
  }, [refresh]);

  return (
    <ContainerStyle>
      <Button onClick={() => navigate('/login')}>
        관리자페이지 메인으로 돌아가기
      </Button>
      <form style={{ padding: '40px' }}>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input
            className="textarea"
            type="textarea"
            placeholder="이미지의 설명을 입력해주세요."
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <Button onClick={onSubmit}>게시하기</Button>
        </div>
      </form>
      <div className="imglist-wrapper">
        {list ? (
          list.map((item, index) => {
            return (
              <div className="img-items" key={index}>
                <div className="item-wrapper">
                  <div className="img-wrapper">
                    <img src={item.url} alt={item.key} />
                  </div>
                  <div className="item-content">
                    <div>{item.key?.substring(4, item.key?.length)}</div>
                    <div className="btn-wrapper">
                      <Button
                        className="list-btn"
                        onClick={(e) =>
                          onDelete(e, item.key ? (item.key as string) : '')
                        }>
                        삭제하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </ContainerStyle>
  );
};

export default GalleryCreate;
