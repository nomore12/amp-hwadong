/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateImagePostInput = {
  id?: string | null,
  desc?: string | null,
  imgKey?: string | null,
  createdAt?: string | null,
  type?: ImagePostType | null,
  _version?: number | null,
};

export enum ImagePostType {
  WCO = "WCO",
  ETC = "ETC",
}


export type ModelImagePostConditionInput = {
  desc?: ModelStringInput | null,
  imgKey?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelImagePostTypeInput | null,
  and?: Array< ModelImagePostConditionInput | null > | null,
  or?: Array< ModelImagePostConditionInput | null > | null,
  not?: ModelImagePostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelImagePostTypeInput = {
  eq?: ImagePostType | null,
  ne?: ImagePostType | null,
};

export type ImagePost = {
  __typename: "ImagePost",
  id: string,
  desc?: string | null,
  imgKey?: string | null,
  createdAt?: string | null,
  type?: ImagePostType | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateImagePostInput = {
  id: string,
  desc?: string | null,
  imgKey?: string | null,
  createdAt?: string | null,
  type?: ImagePostType | null,
  _version?: number | null,
};

export type DeleteImagePostInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostsInput = {
  id?: string | null,
  title?: string | null,
  desc?: string | null,
  createdAt?: string | null,
  type?: Type | null,
  filePath?: string | null,
  filename?: string | null,
  index?: number | null,
  _version?: number | null,
};

export enum Type {
  NOTICE = "NOTICE",
  REPORT = "REPORT",
}


export type ModelPostsConditionInput = {
  title?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelTypeInput | null,
  filePath?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  index?: ModelIntInput | null,
  and?: Array< ModelPostsConditionInput | null > | null,
  or?: Array< ModelPostsConditionInput | null > | null,
  not?: ModelPostsConditionInput | null,
};

export type ModelTypeInput = {
  eq?: Type | null,
  ne?: Type | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Posts = {
  __typename: "Posts",
  id: string,
  title?: string | null,
  desc?: string | null,
  createdAt?: string | null,
  type?: Type | null,
  filePath?: string | null,
  filename?: string | null,
  index?: number | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePostsInput = {
  id: string,
  title?: string | null,
  desc?: string | null,
  createdAt?: string | null,
  type?: Type | null,
  filePath?: string | null,
  filename?: string | null,
  index?: number | null,
  _version?: number | null,
};

export type DeletePostsInput = {
  id: string,
  _version?: number | null,
};

export type ModelImagePostFilterInput = {
  id?: ModelIDInput | null,
  desc?: ModelStringInput | null,
  imgKey?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelImagePostTypeInput | null,
  and?: Array< ModelImagePostFilterInput | null > | null,
  or?: Array< ModelImagePostFilterInput | null > | null,
  not?: ModelImagePostFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelImagePostConnection = {
  __typename: "ModelImagePostConnection",
  items:  Array<ImagePost | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostsFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelTypeInput | null,
  filePath?: ModelStringInput | null,
  filename?: ModelStringInput | null,
  index?: ModelIntInput | null,
  and?: Array< ModelPostsFilterInput | null > | null,
  or?: Array< ModelPostsFilterInput | null > | null,
  not?: ModelPostsFilterInput | null,
};

export type ModelPostsConnection = {
  __typename: "ModelPostsConnection",
  items:  Array<Posts | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionImagePostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  desc?: ModelSubscriptionStringInput | null,
  imgKey?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionImagePostFilterInput | null > | null,
  or?: Array< ModelSubscriptionImagePostFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  desc?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  filePath?: ModelSubscriptionStringInput | null,
  filename?: ModelSubscriptionStringInput | null,
  index?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionPostsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateImagePostMutationVariables = {
  input: CreateImagePostInput,
  condition?: ModelImagePostConditionInput | null,
};

export type CreateImagePostMutation = {
  createImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateImagePostMutationVariables = {
  input: UpdateImagePostInput,
  condition?: ModelImagePostConditionInput | null,
};

export type UpdateImagePostMutation = {
  updateImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteImagePostMutationVariables = {
  input: DeleteImagePostInput,
  condition?: ModelImagePostConditionInput | null,
};

export type DeleteImagePostMutation = {
  deleteImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostsMutationVariables = {
  input: CreatePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type CreatePostsMutation = {
  createPosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostsMutationVariables = {
  input: UpdatePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type UpdatePostsMutation = {
  updatePosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostsMutationVariables = {
  input: DeletePostsInput,
  condition?: ModelPostsConditionInput | null,
};

export type DeletePostsMutation = {
  deletePosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetImagePostQueryVariables = {
  id: string,
};

export type GetImagePostQuery = {
  getImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListImagePostsQueryVariables = {
  filter?: ModelImagePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagePostsQuery = {
  listImagePosts?:  {
    __typename: "ModelImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      desc?: string | null,
      imgKey?: string | null,
      createdAt?: string | null,
      type?: ImagePostType | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncImagePostsQueryVariables = {
  filter?: ModelImagePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncImagePostsQuery = {
  syncImagePosts?:  {
    __typename: "ModelImagePostConnection",
    items:  Array< {
      __typename: "ImagePost",
      id: string,
      desc?: string | null,
      imgKey?: string | null,
      createdAt?: string | null,
      type?: ImagePostType | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostsQueryVariables = {
  id: string,
};

export type GetPostsQuery = {
  getPosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostsConnection",
    items:  Array< {
      __typename: "Posts",
      id: string,
      title?: string | null,
      desc?: string | null,
      createdAt?: string | null,
      type?: Type | null,
      filePath?: string | null,
      filename?: string | null,
      index?: number | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostsConnection",
    items:  Array< {
      __typename: "Posts",
      id: string,
      title?: string | null,
      desc?: string | null,
      createdAt?: string | null,
      type?: Type | null,
      filePath?: string | null,
      filename?: string | null,
      index?: number | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateImagePostSubscriptionVariables = {
  filter?: ModelSubscriptionImagePostFilterInput | null,
};

export type OnCreateImagePostSubscription = {
  onCreateImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateImagePostSubscriptionVariables = {
  filter?: ModelSubscriptionImagePostFilterInput | null,
};

export type OnUpdateImagePostSubscription = {
  onUpdateImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteImagePostSubscriptionVariables = {
  filter?: ModelSubscriptionImagePostFilterInput | null,
};

export type OnDeleteImagePostSubscription = {
  onDeleteImagePost?:  {
    __typename: "ImagePost",
    id: string,
    desc?: string | null,
    imgKey?: string | null,
    createdAt?: string | null,
    type?: ImagePostType | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnCreatePostsSubscription = {
  onCreatePosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnUpdatePostsSubscription = {
  onUpdatePosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostsSubscriptionVariables = {
  filter?: ModelSubscriptionPostsFilterInput | null,
};

export type OnDeletePostsSubscription = {
  onDeletePosts?:  {
    __typename: "Posts",
    id: string,
    title?: string | null,
    desc?: string | null,
    createdAt?: string | null,
    type?: Type | null,
    filePath?: string | null,
    filename?: string | null,
    index?: number | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
