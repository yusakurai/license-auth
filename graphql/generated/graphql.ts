/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  post: Post;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  user?: Maybe<User>;
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  /** 名 */
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  /** ユーザーID */
  id: Scalars['ID']['output'];
  /** 姓 */
  lastName: Scalars['String']['output'];
  posts: Array<Post>;
};
