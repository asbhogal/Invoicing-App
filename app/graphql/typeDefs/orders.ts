import gql from "graphql-tag";

export const orderTypeDefs = gql`
  type Order {
    id: ID!
    product: Product!
    units: Number!
    supplier: Supplier!
    billed: String!
    dateInvoiced: String!
    paymentDate: String!
    status: String!s
  }

  type Query {
    orders: [Order!]!
  }
`;
