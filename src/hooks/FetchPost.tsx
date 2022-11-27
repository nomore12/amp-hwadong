import React, { useEffect, useState } from 'react';
import { usePagination } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';

interface PropsType {}

const useFetchPost = () => {
  const [list, setList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const paginationProps = usePagination({ totalPages: 8 });
  const fetchPost = async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    // setList(typeof posts);
    const { data } = { ...posts } as any;
    const lists = data.listPosts.items.map((item: any, index: any) => {
      return {
        uuid: item['id'],
        subject: item['title'],
        createdAt: item['createdAt'],
        id: index,
      };
    });
    setList(lists);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return list;
};

export default useFetchPost;
