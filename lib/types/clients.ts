import { ObjectId } from "mongodb";

export type ClientType = {
  _id: ObjectId;
  supplier: string;
  address: string;
  email: string;
  phone: string;
};
