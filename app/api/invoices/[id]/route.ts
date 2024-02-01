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
