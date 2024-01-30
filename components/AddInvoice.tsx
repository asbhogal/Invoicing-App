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
import { InvoiceFormSchema } from "@/lib/types/schemas";

export default function AddInvoice() {
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
          throw new Error("Failed to submit invoice");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        toast("Invoice saved");
      })
      .catch((error) => {
        console.error(error);
        toast("Error saving invoice");
        console.log(data);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-none">Add Invoice</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[850px]">
        <DialogHeader>Add Invoice</DialogHeader>
        <InvoiceForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
