import { ObjectId } from "mongodb";

export type OrderType = {
  _id: ObjectId;
  product: string;
  units: number;
  supplier: string;
  billed: string;
  dateInvoiced: string;
  paymentDate: string;
  status: string;
};
