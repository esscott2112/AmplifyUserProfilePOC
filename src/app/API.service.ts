/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  image?: string | null;
  answerone?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  image?: ModelStringInput | null;
  answerone?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  image?: string | null;
  answerone?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateSummaryreportoneInput = {
  id?: string | null;
  status: string;
  claimantcount?: number | null;
};

export type ModelSummaryreportoneConditionInput = {
  status?: ModelStringInput | null;
  claimantcount?: ModelIntInput | null;
  and?: Array<ModelSummaryreportoneConditionInput | null> | null;
  or?: Array<ModelSummaryreportoneConditionInput | null> | null;
  not?: ModelSummaryreportoneConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateSummaryreportoneInput = {
  id: string;
  status?: string | null;
  claimantcount?: number | null;
};

export type DeleteSummaryreportoneInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  image?: ModelStringInput | null;
  answerone?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSummaryreportoneFilterInput = {
  id?: ModelIDInput | null;
  status?: ModelStringInput | null;
  claimantcount?: ModelIntInput | null;
  and?: Array<ModelSummaryreportoneFilterInput | null> | null;
  or?: Array<ModelSummaryreportoneFilterInput | null> | null;
  not?: ModelSummaryreportoneFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSummaryreportoneMutation = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSummaryreportoneMutation = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSummaryreportoneMutation = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    image: string | null;
    answerone: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSummaryreportoneQuery = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSummaryreportonesQuery = {
  __typename: "ModelSummaryreportoneConnection";
  items: Array<{
    __typename: "Summaryreportone";
    id: string;
    status: string;
    claimantcount: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
  answerone: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSummaryreportoneSubscription = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSummaryreportoneSubscription = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSummaryreportoneSubscription = {
  __typename: "Summaryreportone";
  id: string;
  status: string;
  claimantcount: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateSummaryreportone(
    input: CreateSummaryreportoneInput,
    condition?: ModelSummaryreportoneConditionInput
  ): Promise<CreateSummaryreportoneMutation> {
    const statement = `mutation CreateSummaryreportone($input: CreateSummaryreportoneInput!, $condition: ModelSummaryreportoneConditionInput) {
        createSummaryreportone(input: $input, condition: $condition) {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSummaryreportoneMutation>response.data.createSummaryreportone;
  }
  async UpdateSummaryreportone(
    input: UpdateSummaryreportoneInput,
    condition?: ModelSummaryreportoneConditionInput
  ): Promise<UpdateSummaryreportoneMutation> {
    const statement = `mutation UpdateSummaryreportone($input: UpdateSummaryreportoneInput!, $condition: ModelSummaryreportoneConditionInput) {
        updateSummaryreportone(input: $input, condition: $condition) {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSummaryreportoneMutation>response.data.updateSummaryreportone;
  }
  async DeleteSummaryreportone(
    input: DeleteSummaryreportoneInput,
    condition?: ModelSummaryreportoneConditionInput
  ): Promise<DeleteSummaryreportoneMutation> {
    const statement = `mutation DeleteSummaryreportone($input: DeleteSummaryreportoneInput!, $condition: ModelSummaryreportoneConditionInput) {
        deleteSummaryreportone(input: $input, condition: $condition) {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSummaryreportoneMutation>response.data.deleteSummaryreportone;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            bio
            image
            answerone
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetSummaryreportone(id: string): Promise<GetSummaryreportoneQuery> {
    const statement = `query GetSummaryreportone($id: ID!) {
        getSummaryreportone(id: $id) {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSummaryreportoneQuery>response.data.getSummaryreportone;
  }
  async ListSummaryreportones(
    filter?: ModelSummaryreportoneFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSummaryreportonesQuery> {
    const statement = `query ListSummaryreportones($filter: ModelSummaryreportoneFilterInput, $limit: Int, $nextToken: String) {
        listSummaryreportones(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            status
            claimantcount
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSummaryreportonesQuery>response.data.listSummaryreportones;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
          answerone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateSummaryreportoneListener: Observable<
    OnCreateSummaryreportoneSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSummaryreportone {
        onCreateSummaryreportone {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateSummaryreportoneSubscription>;

  OnUpdateSummaryreportoneListener: Observable<
    OnUpdateSummaryreportoneSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSummaryreportone {
        onUpdateSummaryreportone {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateSummaryreportoneSubscription>;

  OnDeleteSummaryreportoneListener: Observable<
    OnDeleteSummaryreportoneSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSummaryreportone {
        onDeleteSummaryreportone {
          __typename
          id
          status
          claimantcount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteSummaryreportoneSubscription>;
}
