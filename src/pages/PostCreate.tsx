import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Text,
  SelectField,
  Pagination,
  usePagination,
  SwitchField,
  Tabs,
  TabItem,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, Amplify, graphqlOperation } from 'aws-amplify';
import { createPosts, updatePosts, deletePosts } from '../graphql/mutations';
import { listPosts } from '../graphql/queries';
import config from '../aws-exports';
import PostsCreateForm from '../ui-components/PostsCreateForm';

const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
`;

const PostCreate = () => {
  const [list, setList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const paginationProps = usePagination({ totalPages: 8 });
  const fetchPost = async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    // setList(typeof posts);
    const { data } = { ...posts } as any;
    setList(data.listPosts.items);
  };

  useEffect(() => {
    fetchPost();
    // .then((data) => console.log('data: ', data))
    // .catch((err) => console.log('err', err));
  }, []);

  return (
    <ContainerStyle>
      <Text fontSize="x-large">공지사항 및 사업보고</Text>
      <Tabs
        currentIndex={tabIndex}
        justifyContent="flex-start"
        onChange={(i) => setTabIndex(i as number)}>
        <TabItem title="글쓰기">
          <PostsCreateForm />
        </TabItem>
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
  );
};

export default PostCreate;
