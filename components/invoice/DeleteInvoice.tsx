"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export interface DeleteInvoiceProps {
  invoiceId: string;
  onDelete?: () => void;
}

export default function DeleteInvoice({
  invoiceId,
  onDelete,
}: DeleteInvoiceProps) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/invoices/${invoiceId}`, {
        method: "DELETE",
      });
      http: if (res.ok) {
        toast("Invoice deleted");
        router.push("/");
      } else {
        toast("Failed to delete invoice");
      }
    } catch (error) {
      toast("Failed to delete invoice");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Delete Invoice</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>Delete Invoice</AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to delete this invoice?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          <AlertDialogCancel>
            <Button>Cancel</Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
