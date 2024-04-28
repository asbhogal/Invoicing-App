import Invoice from "@/models/Invoice";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const locatedInvoice = await Invoice.findOne({ _id: id });
  return NextResponse.json(locatedInvoice, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const updateData = await request.json();
  console.log(`Updating invoice with ID: ${id}`);
  console.log("Update data:", updateData);

  const updatedInvoice = await Invoice.findByIdAndUpdate(id, updateData, {
    new: true,
  });
  console.log("Updated invoice:", updatedInvoice);

  return NextResponse.json(updatedInvoice, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  await Invoice.findByIdAndDelete({ _id: id });
  return NextResponse.json({ message: "Invoice deleted" }, { status: 200 });
}
