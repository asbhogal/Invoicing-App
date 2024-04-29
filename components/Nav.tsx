import Link from "next/link";
import LogOut from "./LogOut";
import {
  BadgePoundSterling,
  LayoutDashboard,
  MessagesSquare,
  Truck,
} from "lucide-react";

type NavBarType = {
  id: number;
  title: string;
  path: string;
  icon: React.ReactNode;
};

const navBar: NavBarType[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <LayoutDashboard />,
  },
  {
    id: 2,
    title: "Invoices",
    path: "/profile",
    icon: <BadgePoundSterling />,
  },
  {
    id: 3,
    title: "Suppliers",
    path: "/settings",
    icon: <Truck />,
  },
  {
    id: 4,
    title: "Messages",
    path: "/messages",
    icon: <MessagesSquare />,
  },
];

export default function Navbar() {
  return (
    <header className="flex flex-col items-center justify-between px-2 py-6 m-4 h-dvh fixed w-36">
      <nav className="flex flex-col items-center justify-center">
        {navBar.map((item) => (
          <Link
            className="flex items-center justify-between gap-4 w-full p-4 hover:bg-gray-900 transition rounded-md"
            key={item.id}
            href={item.path}
            title={item.title}
          >
            <span>{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>
      <LogOut />
    </header>
  );
}
