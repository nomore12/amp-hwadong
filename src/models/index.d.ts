import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ImagePostType {
  WCO = "WCO",
  ETC = "ETC"
}

export enum Type {
  NOTICE = "NOTICE",
  REPORT = "REPORT"
}



type EagerImagePost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ImagePost, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly desc?: string | null;
  readonly imgKey?: string | null;
  readonly createdAt?: string | null;
  readonly type?: ImagePostType | keyof typeof ImagePostType | null;
  readonly updatedAt?: string | null;
}

type LazyImagePost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ImagePost, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly desc?: string | null;
  readonly imgKey?: string | null;
  readonly createdAt?: string | null;
  readonly type?: ImagePostType | keyof typeof ImagePostType | null;
  readonly updatedAt?: string | null;
}

export declare type ImagePost = LazyLoading extends LazyLoadingDisabled ? EagerImagePost : LazyImagePost

export declare const ImagePost: (new (init: ModelInit<ImagePost>) => ImagePost) & {
  copyOf(source: ImagePost, mutator: (draft: MutableModel<ImagePost>) => MutableModel<ImagePost> | void): ImagePost;
}

type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly desc?: string | null;
  readonly createdAt?: string | null;
  readonly type?: Type | keyof typeof Type | null;
  readonly filePath?: string | null;
  readonly filename?: string | null;
  readonly index?: number | null;
  readonly updatedAt?: string | null;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly desc?: string | null;
  readonly createdAt?: string | null;
  readonly type?: Type | keyof typeof Type | null;
  readonly filePath?: string | null;
  readonly filename?: string | null;
  readonly index?: number | null;
  readonly updatedAt?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}