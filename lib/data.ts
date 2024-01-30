import { NetPaymentDataType, StatusValue } from "./types/data";

export const netPaymentData: NetPaymentDataType[] = [
  "1 Day",
  "7 Days",
  "14 Days",
  "30 Days",
];

export const status: StatusValue[] = [
  "paid",
  "pending",
  "draft",
  "overdue",
  "cancelled",
];
