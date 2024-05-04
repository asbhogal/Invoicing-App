import { MongoClient } from "mongodb";
import { OrderType } from "../types/orders";
import { DatabaseType } from "./types";

export const connectDatabase = async (): Promise<DatabaseType> => {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env",
    );
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI || "", {
    connectTimeoutMS: 5000,
    socketTimeoutMS: 5000,
  });

  const db = client.db("main");

  return {
    orders: db.collection<OrderType>("orders"),
  };
};
