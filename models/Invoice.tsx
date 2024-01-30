import { mongooseInvoiceSchema } from "@/lib/types/schemas";
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI provided");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", mongooseInvoiceSchema);

export default Invoice;
