"use client";

import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { InvoiceForm, InvoiceFormSchema } from "./InvoiceForm";

export default function AddInvoice() {
  function onSubmit(data: z.infer<typeof InvoiceFormSchema>) {
    toast("Invoice saved");
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Invoice</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[800px]">
        <DialogHeader>Add Invoice</DialogHeader>
        <InvoiceForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
