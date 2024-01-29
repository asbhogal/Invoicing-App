import mongoose, { Schema } from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI provided");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const invoiceSchema = new Schema({
  businessAddress: { type: String, required: true, minlength: 3 },
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
  projectName: { type: String, required: true, minlength: 3 },
});

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
