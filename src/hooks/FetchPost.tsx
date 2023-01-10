import React, { useEffect, useState } from 'react';
import { usePagination } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';

interface PropsType {
  type: string;
}

const useFetchPost = () => {
  const [list, setList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const paginationProps = usePagination({ totalPages: 8 });
  const fetchPost = async () => {
    const posts = await API.graphql(graphqlOperation(listPosts));
    const { data } = { ...posts } as any;
    const lists = data.listPosts.items
      .filter((item: any) => !item['_deleted'])
      .sort((prev: any, curr: any) =>
        prev.createdAt < curr.createdAt ? 1 : -1
      )
      .map((item: any, index: any) => {
        return {
          uuid: item['id'],
          subject: item['title'],
          createdAt: item['createdAt'],
          type: item['type'],
          id: index + 1,
        };
      });
    // .filter((item: any) => item.type === type);
    setList(lists);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return list;
};

export default useFetchPost;
