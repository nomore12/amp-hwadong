/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImagePost = /* GraphQL */ `
  query GetImagePost($id: ID!) {
    getImagePost(id: $id) {
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
export const listImagePosts = /* GraphQL */ `
  query ListImagePosts(
    $filter: ModelImagePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagePosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncImagePosts = /* GraphQL */ `
  query SyncImagePosts(
    $filter: ModelImagePostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncImagePosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
