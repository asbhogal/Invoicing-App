import gql from "graphql-tag";

export const orderTypeDefs = gql`
  type Order {
    _id: ID!
    product: String!
    units: Int!
    supplier: String!
    billed: String!
    dateInvoiced: String!
    paymentDate: String!
    status: String!
  }

  type Query {
    orders: [Order!]!
  }
`;
