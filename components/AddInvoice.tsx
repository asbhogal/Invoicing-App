"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
      <DialogContent>
        <DialogHeader>Add Invoice</DialogHeader>
        <InvoiceForm onSubmit={onSubmit} />
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
