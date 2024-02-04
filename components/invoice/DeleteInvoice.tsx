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

export default function DeleteInvoice() {
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
          <AlertDialogAction>
            <Button>Delete</Button>
          </AlertDialogAction>
          <AlertDialogCancel>
            <Button>Cancel</Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
