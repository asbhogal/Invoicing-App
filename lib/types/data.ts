export type StatusValue =
  | "paid"
  | "pending"
  | "draft"
  | "overdue"
  | "cancelled";

export const statusBgClassMap: Record<StatusValue, string> = {
  paid: "#EDFFF1",
  pending: "#FFF9EA",
  draft: "#f4f4f5",
  overdue: "#FFC4C4",
  cancelled: "#dfe3fa",
};

export const statusTextClassMap: Record<StatusValue, string> = {
  paid: "#0B2E23",
  pending: "#754C00",
  draft: "#373b53",
  overdue: "#782C44",
  cancelled: "#000000",
};

export type NetPaymentDataType = "1 Day" | "7 Days" | "14 Days" | "30 Days";

export interface Deliverable {
  id: string;
  deliverable: string;
  quantity: number;
  price: number;
}

export interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface Item {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface InvoiceData {
  id: string;
  product: string;
  units: number;
  supplier: string;
  billed: string;
  dateInvoiced: string;
  paymentDue: string;
  status: StatusValue;
}
