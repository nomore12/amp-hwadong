import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  Authenticator,
  Button,
  Pagination,
  SelectField,
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
import { API, graphqlOperation } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
import { listPosts } from '../graphql/queries';
import PostsCreateForm, {
  PostsCreateFormInputValues,
  PostsCreateFormValidationValues,
  ValidationResponse,
} from '../ui-components/PostsCreateForm';
import { format } from 'date-fns';

interface PropsType {
  postType: string;
}

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
`;

// const apiKey = 'da2-brh5jb5dw5biboz6hzj243f6du';
// const apiName = 'amphwadong-staging';
// const options = {
//   headers: {
//     Authorization: `bearer ${apiKey}`,
//   },
// };

const PAGINATION_LIMIT = 10;

const PostCreate = ({ postType }: PropsType) => {
  const [list, setList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [type, setType] = useState('ALL');
  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const paginationProps = usePagination({ totalPages: 8 });
  const fetchPost = async () => {
    const posts = await API.graphql({
      query: listPosts,
    });
    const { data } = { ...posts } as any;
    setList(data.listPosts.items);
    setStartedAt(data.listPosts?.startedAt);
    setNextToken(data.listPosts.nextToken);
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
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
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
              <PostsCreateForm
                // onChange={onPostChange}
                onSubmit={onPostSubmit}
                onSuccess={onPostSuccess}
                clearOnSuccess={true}
              />
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
                        return item['type'] === postType;
                        // ? item['type']
                        // : type === item['type'];
                      })
                      .map((item, index) => {
                        // if (index + 1 > PAGINATION_LIMIT) return null;
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
                <Pagination currentPage={1} totalPages={10} siblingCount={1} />
              </Table>
            </TabItem>
          </Tabs>
        </ContainerStyle>
      )}
    </Authenticator>
  );
};

export default PostCreate;
