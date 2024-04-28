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
  },
  {
    accessorKey: "paymentDue",
    header: "Payment Due",
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
            <Button>
              <span className="sr-only">Open Actions</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
