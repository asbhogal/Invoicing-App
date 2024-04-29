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
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogOut() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="flex items-center justify-between gap-4 w-full p-4 hover:bg-gray-900 transition rounded-md"
          title="Log Out"
        >
          <LogOutIcon />
          Log Out
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>Log Out</AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to log out?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction>
            <Button>Log Out</Button>
          </AlertDialogAction>
          <AlertDialogCancel>
            <Button>Cancel</Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
