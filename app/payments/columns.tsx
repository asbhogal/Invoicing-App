"use client";

import { ColumnDef, CellContext } from "@tanstack/react-table"; // Adjust the import if necessary
import Status from "@/components/Status";
import { InvoiceData, StatusValue } from "@/lib/types/data"; // Adjust the import path as necessary

export const columns: ColumnDef<InvoiceData>[] = [
  {
    accessorKey: "businessName",
    header: "Business",
  },
  {
    accessorKey: "clientName",
    header: "Client",
  },
  {
    accessorKey: "paymentDue",
    header: "Payment Due",
  },
  {
    accessorKey: "billed",
    header: "Billed",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (cell: CellContext<InvoiceData, unknown>) => {
      const status = cell.row.original.status as StatusValue;
      return <Status status={status} />;
    },
  },
];
