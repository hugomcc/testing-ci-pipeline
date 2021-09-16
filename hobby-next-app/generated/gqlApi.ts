/* eslint-disable */
import { useQuery, UseQueryOptions } from 'react-query';
import { graphQLFetcher } from '../src/api/config';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateHobbyInput = {
  name: Scalars['String'];
};

export type CreatePersonInput = {
  hobbies: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Hobby = {
  __typename?: 'Hobby';
  name: Scalars['String'];
};

export type ListHobbyInput = {
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ListPersonInput = {
  _id?: Maybe<Scalars['String']>;
  hobbies?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHobby: Hobby;
  createPerson: Person;
  deleteHobby: Hobby;
  deletePerson: Person;
  updateHobby: Hobby;
  updatePerson: Person;
};


export type MutationCreateHobbyArgs = {
  payload: CreateHobbyInput;
};


export type MutationCreatePersonArgs = {
  payload: CreatePersonInput;
};


export type MutationDeleteHobbyArgs = {
  _id: Scalars['String'];
};


export type MutationDeletePersonArgs = {
  _id: Scalars['String'];
};


export type MutationUpdateHobbyArgs = {
  payload: UpdateHobbyInput;
};


export type MutationUpdatePersonArgs = {
  payload: UpdatePersonInput;
};

export type Person = {
  __typename?: 'Person';
  hobbies: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hobbies: Array<Hobby>;
  hobby: Hobby;
  person: Person;
  persons: Array<Person>;
};


export type QueryHobbiesArgs = {
  filters?: Maybe<ListHobbyInput>;
};


export type QueryHobbyArgs = {
  _id: Scalars['String'];
};


export type QueryPersonArgs = {
  _id: Scalars['String'];
};


export type QueryPersonsArgs = {
  filters?: Maybe<ListPersonInput>;
};

export type UpdateHobbyInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UpdatePersonInput = {
  _id: Scalars['String'];
  hobbies?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
};

export type GetHobiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHobiesQuery = { __typename?: 'Query', hobbies: Array<{ __typename?: 'Hobby', name: string }> };


export const GetHobiesDocument = `
    query getHobies {
  hobbies {
    name
  }
}
    `;
export const useGetHobiesQuery = <
      TData = GetHobiesQuery,
      TError = unknown
    >(
      variables?: GetHobiesQueryVariables, 
      options?: UseQueryOptions<GetHobiesQuery, TError, TData>
    ) => 
    useQuery<GetHobiesQuery, TError, TData>(
      ['getHobies', variables],
      graphQLFetcher<GetHobiesQuery, GetHobiesQueryVariables>(GetHobiesDocument, variables),
      options
    );