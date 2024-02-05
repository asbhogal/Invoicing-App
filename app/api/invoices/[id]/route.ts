import Invoice from "@/models/Invoice";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);
  const { id } = params;

  const locatedInvoice = await Invoice.findOne({ _id: id });
  return NextResponse.json(locatedInvoice, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const updatedInvoice = await Invoice.findByIdAndUpdate({ _id: id });
  return NextResponse.json(updatedInvoice, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  await Invoice.findByIdAndDelete({ _id: id });
  return NextResponse.json({ message: "Invoice deleted" }, { status: 200 });
}
