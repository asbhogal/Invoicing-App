import { Collection } from "mongodb";
import { OrderType } from "../types/orders";

export type DatabaseType = {
  orders: Collection<OrderType>;
};
