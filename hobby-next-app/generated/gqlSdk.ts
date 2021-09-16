/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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


export type GetHobiesQuery = (
  { __typename?: 'Query' }
  & { hobbies: Array<(
    { __typename?: 'Hobby' }
    & Pick<Hobby, 'name'>
  )> }
);


export const GetHobiesDocument = gql`
    query getHobies {
  hobbies {
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getHobies(variables?: GetHobiesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHobiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHobiesQuery>(GetHobiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHobies');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;