import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Authenticator,
  Button,
  Pagination,
  TabItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Text,
  usePagination,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
import { listPosts } from '../graphql/queries';
import { PostsCreateFormInputValues } from '../ui-components/PostsCreateForm';
import { LazyPosts, Posts, Type } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import * as mutations from '../graphql/mutations';
import { createPosts } from '../graphql/mutations';
import { getRandomKey } from 'key-maker-woongs';

interface PropsType {
  postType: string;
}

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
    padding: 10px;
    display: flex;
    gap: 10px;
  }

  .input-btn {
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
  }
`;

const NewPostCreate = ({ postType }: PropsType) => {
  const [list, setList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [type, setType] = useState('ALL');
  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [filePath, setFilePath] = useState<string>('');
  const [file, setFile] = useState<File | undefined>(undefined);
  const [filename, setFilename] = useState('');

  const paginationProps = usePagination({ totalPages: 8 });
  const fetchPost = async () => {
    const posts = await API.graphql({
      query: listPosts,
    });
    const { data } = { ...posts } as any;
    console.log('data', data);
    setList(data.listPosts.items);
    setStartedAt(data.listPosts?.startedAt);
    setNextToken(data.listPosts.nextToken);
    console.log(data);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const onPostChange = (data: PostsCreateFormInputValues) => {
    return data;
  };

  const onPostSuccess = (data: PostsCreateFormInputValues) => {
    // alert('작성이 완료되었습니다.');
    // data && fetchPost();
    setTimeout(() => window.location.reload(), 500);
    setTabIndex(1);
  };

  const onPostSubmit = (data: PostsCreateFormInputValues) => {
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth() + 1;
    // const date = today.getDate();
    // const awsDate = `${year}-${month >= 10 ? month : '0' + month}-${
    //   date >= 10 ? date : '0' + date
    // }`;
    const awsDate = new Date().toISOString();

    const result = {
      ...data,
      type: postType,
      createdAt: awsDate,
    } as PostsCreateFormInputValues;

    return result;
  };

  async function createPost(data: PostsCreateFormInputValues) {
    const newPost = await API.graphql(
      graphqlOperation(mutation.createPosts, { input: { ...data } })
    );
  }

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
      setFilename(file.name);
    }
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('key', filePath);
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const created = new Date(utc + KR_TIME_DIFF).toISOString();
    console.log(created);

    console.log(file);
    const uniqueKey = file ? getRandomKey() : '';
    setFilePath(uniqueKey);
    console.log(uniqueKey);
    const newPost = await API.graphql({
      query: mutations.createPosts,
      variables: {
        input: {
          title: title,
          desc: desc,
          createdAt: created,
          type: postType === 'NOTICE' ? Type.NOTICE : Type.REPORT,
          filePath: uniqueKey,
          filename: postType === 'REPORT' && file ? filename : '',
        },
      },
    });

    const { data } = newPost as any;

    console.log(newPost);
    if (file) {
      const { key } = await Storage.put(uniqueKey, file, {
        contentType: 'image/*',
        level: 'public',
        customPrefix: {
          public: postType === 'NOTICE' ? 'public/notice/' : 'public/report/',
        },
      });
      setFilePath(key);
    }

    setTitle('');
    setDesc('');
    try {
      // @ts-ignore
      e.target[2].value = '';
      setFile(undefined);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [tabIndex, type]);

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <ContainerStyle>
          <Text fontSize="x-large">
            {postType === 'NOTICE' ? '공지사항' : '연간사업보고'}
          </Text>
          <Button onClick={() => navigate('/login')}>
            관리자 페이지 메인으로 돌아가기
          </Button>
          <Tabs
            currentIndex={tabIndex}
            justifyContent="flex-start"
            onChange={(i) => setTabIndex(i as number)}>
            {/* post create */}
            <TabItem title="글쓰기">
              <div className="form-wrapper">
                <form className="post-create-form" onSubmit={onSubmit}>
                  <div className="input-wrapper">
                    <label htmlFor="title">제목</label>
                    <input
                      type="text"
                      name="title"
                      onChange={onTitleChange}
                      value={title}
                      style={{ width: '400px' }}
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="textarea">게시글</label>
                    <textarea
                      name="textarea"
                      onChange={onDescChange}
                      value={desc}
                      style={{
                        width: '400px',
                        height: '320px',
                        resize: 'none',
                      }}
                    />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="file">파일</label>
                    <input
                      type="file"
                      name="file"
                      accept={postType === 'NOTICE' ? 'image/*' : '.pdf'}
                      onChange={onFileSelect}
                    />
                  </div>
                  <div className="input-wrapper">
                    <button className="input-btn">clear</button>
                    <input type="submit" className="input-btn" />
                  </div>
                </form>
              </div>
            </TabItem>
            {/* table */}
            <TabItem title="목록 보기">
              <Table highlightOnHover variation="bordered" size="small">
                <TableHead>
                  <TableRow>
                    <TableCell as="th">제목</TableCell>
                    <TableCell as="th">타입</TableCell>
                    <TableCell as="th">생성일</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list &&
                    list
                      .sort((prev, next) =>
                        prev['createdAt'] > next['createdAt'] ? -1 : 1
                      )
                      .filter((item) => {
                        return item['type'] === postType && !item['_deleted'];
                      })
                      .map((item, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell
                              onClick={() => navigate(`/post/${item['id']}`)}>
                              {item['title']}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate(`/post/${item['id']}`)}>
                              {item['type']}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate(`/post/${item['id']}`)}>
                              {item['createdAt']}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                </TableBody>
                {/*<Pagination currentPage={1} totalPages={10} siblingCount={1} />*/}
              </Table>
            </TabItem>
          </Tabs>
        </ContainerStyle>
      )}
    </Authenticator>
  );
};

export default NewPostCreate;
