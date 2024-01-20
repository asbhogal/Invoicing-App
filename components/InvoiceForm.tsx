"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Input } from "./ui/input";

export const InvoiceFormSchema = z.object({
  /* name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email(), */
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  /* city: z.string().min(3, { message: "City must be at least 3 characters" }),
  zip: z.string().min(3, { message: "Zip code must be at least 3 characters" }),
  country: z
    .string()
    .min(3, { message: "Country must be at least 3 characters" }),
  phone: z.string().min(3),
  project: z
    .string()
    .min(3, { message: "Project must be at least 3 characters" }),
  item: z.string().min(3, { message: "Item must be at least 3 characters" }),
  quantity: z.number(),
  price: z.number(), */
});

export function InvoiceForm() {
  const form = useForm<z.infer<typeof InvoiceFormSchema>>({
    resolver: zodResolver(InvoiceFormSchema),
    defaultValues: {
      /* name: "",
      email: "", */
      address: "",
      /* city: "",
      zip: "",
      country: "",
      phone: "",
      project: "",
      item: "",
      quantity: 0,
      price: 0, */
    },
  });

  function onSubmit(data: z.infer<typeof InvoiceFormSchema>) {
    toast("Invoice saved");
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Street Address</FormLabel>
              <FormControl>
                <Input placeholder="19 Union Terrace" {...field} />
              </FormControl>
              <FormMessage className="form-message" />
            </FormItem>
          )}
        />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
