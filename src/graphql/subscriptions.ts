/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImagePost = /* GraphQL */ `
  subscription OnCreateImagePost(
    $filter: ModelSubscriptionImagePostFilterInput
  ) {
    onCreateImagePost(filter: $filter) {
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
export const onUpdateImagePost = /* GraphQL */ `
  subscription OnUpdateImagePost(
    $filter: ModelSubscriptionImagePostFilterInput
  ) {
    onUpdateImagePost(filter: $filter) {
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
export const onDeleteImagePost = /* GraphQL */ `
  subscription OnDeleteImagePost(
    $filter: ModelSubscriptionImagePostFilterInput
  ) {
    onDeleteImagePost(filter: $filter) {
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
export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onCreatePosts(filter: $filter) {
      id
      title
      desc
      createdAt
      type
      filePath
      filename
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
    onUpdatePosts(filter: $filter) {
      id
      title
      desc
      createdAt
      type
      filePath
      filename
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
    onDeletePosts(filter: $filter) {
      id
      title
      desc
      createdAt
      type
      filePath
      filename
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
