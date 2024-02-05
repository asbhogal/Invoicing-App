"use client";

import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { InvoiceForm } from "./InvoiceForm";
import { InvoiceFormSchema } from "@/lib/schemas";
import { useEffect, useState } from "react";
import { InvoiceData } from "@/lib/types/data";

export default function EditInvoice({ invoiceId }: { invoiceId: string }) {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);

  useEffect(() => {
    fetch(`/api/invoices/${invoiceId}`)
      .then((response) => response.json())
      .then((data) => {
        data.invoiceDate = new Date(data.invoiceDate);
        setInvoiceData(data);
      })
      .catch((error) => console.error("Error fetching invoice data", error));
  }, [invoiceId]);

  function onSubmit(data: z.infer<typeof InvoiceFormSchema>) {
    fetch("/api/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to edit invoice");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        toast("Invoice edited");
      })
      .catch((error) => {
        console.error(error);
        toast("Error editing invoice");
      });
  }

  if (!invoiceData) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Invoice</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[850px]">
        <DialogHeader>
          <h2>Edit Invoice</h2>
          <div className="border border-dustStorm" />
        </DialogHeader>
        <InvoiceForm
          onSubmit={onSubmit}
          initialValues={invoiceData}
          isEditing
        />
      </DialogContent>
    </Dialog>
  );
}
