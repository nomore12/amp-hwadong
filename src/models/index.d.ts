import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Type {
  NOTICE = "NOTICE",
  REPORT = "REPORT"
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
  readonly updatedAt?: string | null;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}