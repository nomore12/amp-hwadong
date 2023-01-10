/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImagePost = /* GraphQL */ `
  mutation CreateImagePost(
    $input: CreateImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    createImagePost(input: $input, condition: $condition) {
      id
      desc
      imgKey
      createdAt
      type
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateImagePost = /* GraphQL */ `
  mutation UpdateImagePost(
    $input: UpdateImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    updateImagePost(input: $input, condition: $condition) {
      id
      desc
      imgKey
      createdAt
      type
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteImagePost = /* GraphQL */ `
  mutation DeleteImagePost(
    $input: DeleteImagePostInput!
    $condition: ModelImagePostConditionInput
  ) {
    deleteImagePost(input: $input, condition: $condition) {
      id
      desc
      imgKey
      createdAt
      type
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
      id
      title
      desc
      createdAt
      type
      filePath
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
      id
      title
      desc
      createdAt
      type
      filePath
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
      id
      title
      desc
      createdAt
      type
      filePath
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
