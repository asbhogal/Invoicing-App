"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon, Trash, TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import Icon from "./Icon";

export const netPaymentData: NetPaymentDataType[] = [
  "1 Day",
  "7 Days",
  "14 Days",
  "30 Days",
];

export type NetPaymentDataType = "1 Day" | "7 Days" | "14 Days" | "30 Days";

export const InvoiceFormSchema = z.object({
  businessAddress: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  businessCity: z
    .string()
    .min(3, { message: "City must be at least 3 characters" }),
  businessZip: z
    .string()
    .min(3, { message: "Postal Code must be at least 3 characters" }),
  businessCountry: z
    .string()
    .min(3, { message: "Country must be at least 3 characters" }),
  clientName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  clientEmail: z.string().email(),
  clientAddress: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" }),
  clientCity: z.string().min(3),
  clientZip: z
    .string()
    .min(3, { message: "Postal Code must be at least 3 characters" }),
  clientCountry: z
    .string()
    .min(3, { message: "Country must be at least 3 characters" }),
  invoiceDate: z.date({ required_error: "Invoice date is required" }),
  paymentTerms: z.string({
    required_error: "Please select the payment terms.",
  }),
  projectName: z
    .string()
    .min(3, { message: "Project name must be at least 3 characters" }),
  deliverable: z
    .string()
    .min(3, { message: "Deliverable must be at least 3 characters" }),
  quantity: z.number(),
  price: z.number(),
});

export interface InvoiceFormProps {
  onSubmit: (data: z.infer<typeof InvoiceFormSchema>) => void;
}

export function InvoiceForm({ onSubmit }: InvoiceFormProps) {
  const form = useForm<z.infer<typeof InvoiceFormSchema>>({
    resolver: zodResolver(InvoiceFormSchema),
    mode: "onChange",
    defaultValues: {
      businessAddress: "",
      businessCity: "",
      businessZip: "",
      businessCountry: "",
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      clientCity: "",
      clientZip: "",
      clientCountry: "",
      paymentTerms: "",
      projectName: "",
      deliverable: "",
      quantity: 0,
      price: 0,
    },
  });

  const {
    formState: { isValid },
  } = form;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <p>Bill From</p>
            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Street Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="19 Union Terrace"
                      className="capitalize"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="businessCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">City</FormLabel>
                    <FormControl>
                      <Input placeholder="London" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="businessZip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Post Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E1 3EZ"
                        className="uppercase"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="businessCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Country</FormLabel>
                  <FormControl>
                    <Input placeholder="United Kingdom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <p>Bill To</p>
            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Client&apos;s Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Alex Grim"
                      className="capitalize"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Client&apos;s Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="alexgrim@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Client&apos;s Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="19 Union Terrace" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="clientCity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">City</FormLabel>
                    <FormControl>
                      <Input placeholder="Bath" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="clientZip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="form-label">Postal Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="BT23 16D"
                        className="uppercase"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="clientCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Country</FormLabel>
                  <FormControl>
                    <Input placeholder="United Kingdom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <FormField
            control={form.control}
            name="invoiceDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="form-label">Invoice Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal bg-white hover:bg-white",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paymentTerms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Payment Terms</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a payment term" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {netPaymentData.map((option) => (
                      <SelectItem key={option} value={option}>
                        {`Net ${option}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Create business cards" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="deliverable"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Deliverable</FormLabel>
                  <FormControl>
                    <Input placeholder="Create business cards" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2">
              <div className="flex">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Quantity</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="form-label">Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between">
                <p>£0</p>
                <Button className="p-0 bg-transparent hover:bg-transparent">
                  <Icon
                    svgProps={{
                      width: "13",
                      height: "16",
                      viewBox: "0 0 13 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    }}
                  >
                    <path
                      id="Combined Shape"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"
                      fill="#888EB0"
                    />
                  </Icon>
                </Button>
              </div>
            </div>
          </div>
          <Button className="w-full">+ Add New Item</Button>
        </div>
        <div className="flex justify-between">
          <Button>Discard</Button>
          <div>
            <Button>Save as Draft</Button>
            <Button type="submit" disabled={!isValid}>
              Send
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
