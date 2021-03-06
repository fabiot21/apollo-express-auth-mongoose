import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getPosts(skip: Int, limit: Int): [Post!]!
    getPost(id: ID!): Post!
  }

  extend type Mutation {
    createPost(postInput: PostInput!): Post! @isAuth
    editPost(postInput: PostInput!, id: ID!): Post! @isAuth
    deletePost(id: ID!): Boolean! @isAuth
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    createdAt: String
    updatedAt: String
  }

  input PostInput {
    title: String!
    content: String!
  }
`;
