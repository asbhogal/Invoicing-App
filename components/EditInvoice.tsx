"use client";

import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { InvoiceForm } from "./InvoiceForm";
import { InvoiceFormSchema } from "@/lib/schemas";

export default function EditInvoice() {
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
        return response.json();
      })
      .then((data) => {
        console.log(data);
        toast("Invoice edited");
      })
      .catch((error) => {
        console.error(error);
        toast("Error editing invoice");
        console.log(data);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Invoice</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[850px]">
        <DialogHeader>
          <h2>Add Invoice</h2>
          <div className="border border-dustStorm" />
        </DialogHeader>
        <InvoiceForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
