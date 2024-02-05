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

export default function LogOut() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="log-out bg-transparent hover:bg-transparent"
          title="Log Out"
          aria-labelledby="button-label"
        >
          <span id="button-label" className="sr-only">
            Log Out
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M138.667 95.9999V21.3333H10.6667V234.667H138.667V160M234.667 128H53.3334M234.667 128L181.333 74.6666M234.667 128L181.333 181.333"
              stroke="#3C3633"
              stroke-width="21.3333"
            />
          </svg>
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
