export type StatusValue =
  | "paid"
  | "pending"
  | "draft"
  | "overdue"
  | "cancelled";

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
  _id: string;
  businessName: string;
  businessEmail: string;
  businessAddress: string;
  businessCity: string;
  businessZip: string;
  businessCountry: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientCity: string;
  clientZip: string;
  clientCountry: string;
  invoiceDate: number;
  paymentTerms: string;
  paymentDue: string;
  projectName: string;
  status: StatusValue;
  description: string;
  items: Item[];
  total: number;
}
