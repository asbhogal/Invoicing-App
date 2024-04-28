"use client";

import { ColumnDef, CellContext } from "@tanstack/react-table";
import Status from "@/components/Status";
import { InvoiceData, StatusValue } from "@/lib/types/data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { formatDate } from "@/lib/functions/formatDate";

export const columns: ColumnDef<InvoiceData>[] = [
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "units",
    header: "Units",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
  {
    accessorKey: "billed",
    header: () => <div>Billed</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("billed"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);
      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "dateInvoiced",
    header: "Date Invoiced",
    cell: ({ row }) => <div>{formatDate(row.getValue("dateInvoiced"))}</div>,
  },
  {
    accessorKey: "paymentDue",
    header: "Payment Due",
    cell: ({ row }) => <div>{formatDate(row.getValue("paymentDue"))}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (cell: CellContext<InvoiceData, unknown>) => {
      const status = cell.row.original.status as StatusValue;
      return <Status status={status} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const suppliers = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="hover:bg-transparent" variant="ghost">
              <span className="sr-only">Open Actions</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(suppliers.id)}
            >
              Copy Invoice ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Edit Invoice
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              Delete Invoice
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
