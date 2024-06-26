import * as z from "zod";
import { Schema } from "mongoose";

export const InvoiceFormSchema = z.object({
  businessName: z
    .string()
    .min(3, { message: "Business name must be at least 3 characters" }),
  businessEmail: z.string().email(),
  businessAddress: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  businessCity: z
    .string()
    .min(3, { message: "City must be at least 3 characters" }),
  businessZip: z
    .string()
    .min(3, { message: "Postal Code must be at least 3 characters" }),
  businessCountry: z
    .string()
    .min(3, { message: "Country must be at least 3 characters" }),
  clientName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  clientEmail: z.string().email(),
  clientAddress: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  clientCity: z.string().min(3),
  clientZip: z
    .string()
    .min(3, { message: "Postal Code must be at least 3 characters" }),
  clientCountry: z
    .string()
    .min(3, { message: "Country must be at least 3 characters" }),
  invoiceDate: z.date({ required_error: "Invoice date is required" }),
  paymentTerms: z.string({
    required_error: "Please select the payment terms.",
  }),
  status: z.string(),
  paymentDue: z.string(),
  projectName: z
    .string()
    .min(3, { message: "Project name must be at least 3 characters" }),
  billed: z.string(),
  deliverables: z.array(
    z.object({
      id: z.string(),
      deliverable: z
        .string()
        .min(3, { message: "Deliverable must be at least 3 characters" }),
      quantity: z.number(),
      price: z.number(),
    }),
  ),
});

export const mongooseInvoiceSchema = new Schema({
  businessName: { type: String, required: true, minlength: 3 },
  businessAddress: { type: String, required: true, minlength: 3 },
  businessEmail: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  businessCity: { type: String, required: true, minlength: 3 },
  businessZip: { type: String, required: true, minlength: 3 },
  businessCountry: { type: String, required: true, minlength: 3 },
  clientName: { type: String, required: true, minlength: 3 },
  clientEmail: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  clientAddress: { type: String, required: true, minlength: 3 },
  clientCity: { type: String, required: true, minlength: 3 },
  clientZip: { type: String, required: true, minlength: 3 },
  clientCountry: { type: String, required: true, minlength: 3 },
  invoiceDate: { type: Date, required: true },
  paymentTerms: { type: String, required: true },
  status: { type: String, required: true },
  paymentDue: { type: String, required: true },
  projectName: { type: String, required: true, minlength: 3 },
  billed: { type: String, required: true },
  deliverables: [
    {
      id: { type: String, required: true },
      deliverable: { type: String, required: true, minlength: 3 },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true },
    },
  ],
});
