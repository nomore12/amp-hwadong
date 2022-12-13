import React, { useEffect } from 'react';
import PostsUpdateForm, {
  PostsUpdateFormInputValues,
} from '../ui-components/PostsUpdateForm';
import { Text } from '@aws-amplify/ui-react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import * as mutation from '../graphql/mutations';
import { getPosts } from '../graphql/queries';

interface PropsType {
  postType: string;
}

const PostUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();

  async function getPost() {
    const post = await API.graphql({
      query: getPosts,
      variables: { id: params.id },
    });
    const { data } = { ...post } as any;
  }

  const onSubmit = (
    fields: PostsUpdateFormInputValues
  ): PostsUpdateFormInputValues => {
    return fields;
  };

  const onSuccess = (fields: PostsUpdateFormInputValues) => {
    navigate(-1);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <Text>수정하기</Text>
      <PostsUpdateForm
        id={params.id}
        onSubmit={onSubmit}
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default PostUpdate;
