import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Authenticator,
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
} from '../ui-components/PostsCreateForm';
import { Type } from '../models';

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
`;

const apiKey = 'da2-brh5jb5dw5biboz6hzj243f6du';
const apiName = 'amphwadong-staging';
const options = {
  headers: {
    Authorization: `bearer ${apiKey}`,
  },
};

const PostCreate = () => {
  const [list, setList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState<PostsCreateFormInputValues>({
    title: '',
    desc: '',
    createdAt: '',
    type: Type.NOTICE,
  });
  const paginationProps = usePagination({ totalPages: 8 });
  const fetchPost = async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    // setList(typeof posts);
    const { data } = { ...posts } as any;
    setList(data.listPosts.items);
  };

  const onPostChange = (data: PostsCreateFormInputValues) => {
    setFormData(data);
    return data;
  };

  const onPostSubmit = (data: PostsCreateFormInputValues) => {
    // console.log(data);
    createPost(data);
    return data;
  };

  async function createPost(data: PostsCreateFormInputValues) {
    const newPost = await API.graphql(
      graphqlOperation(mutation.createPosts, {
        input: formData,
        // authMode: 'API_KEY',
        // authToken: apiKey,
      })
    );
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <ContainerStyle>
          <Text fontSize="x-large">공지사항 및 사업보고</Text>
          <Tabs
            currentIndex={tabIndex}
            justifyContent="flex-start"
            onChange={(i) => setTabIndex(i as number)}>
            {/* post create */}
            <TabItem title="글쓰기">
              <PostsCreateForm
                onChange={onPostChange}
                onSubmit={onPostSubmit}
              />
            </TabItem>
            {/* table */}
            <TabItem title="목록 보기">
              <SelectField label="타입" descriptiveText="dddd">
                <option value="all">모두</option>
                <option value="NOTICE">공지사항</option>
                <option value="REPORT">사업보고</option>
              </SelectField>
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
                      .map((item, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell onClick={() => alert(item['title'])}>
                              {item['title']}
                            </TableCell>
                            <TableCell>{item['type']}</TableCell>
                            <TableCell>{item['createdAt']}</TableCell>
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
