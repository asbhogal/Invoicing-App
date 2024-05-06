import gql from "graphql-tag";
import { orderTypeDefs } from "./typeDefs/orders/orders";

export const typeDefs = gql`
  scalar Date
  scalar JSON

  ${orderTypeDefs}
`;
