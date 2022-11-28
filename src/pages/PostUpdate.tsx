import React, { useEffect } from 'react';
import PostsUpdateForm from '../ui-components/PostsUpdateForm';
import { Text } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
import { getPosts } from '../graphql/queries';

// interface PropsType {
//
// };

const PostUpdate = () => {
  const params = useParams();

  async function getPost() {
    const post = await API.graphql({
      query: getPosts,
      variables: { id: params.id },
    });
    const { data } = { ...post } as any;
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Text>수정하기</Text>
      <PostsUpdateForm id={params.id} />
    </div>
  );
};

export default PostUpdate;
