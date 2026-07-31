"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  LogOut,
  Settings,
  User,
  LayoutDashboard,
  CreditCard,
  Bell,
  LifeBuoy,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";
import { logout } from "@/service/logout";
import Image from "next/image";

// Nav links stored in an array for easy maintenance.
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Subscription", href: "/payments" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// User menu items in an array for easy maintenance.
const userMenuItems = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Billing", href: "/billing", icon: CreditCard },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Support", href: "/support", icon: LifeBuoy },
];

interface IUser {
  success: true;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    phone_number: string;
    role: string;
    customer_status: string;
    stripCustomerId: string;
    created_at: string;
    updated_at: string;
    profile: {
      id: string;
      bio?: string;
      profileImage: string;
      userId: string;
      created_at: string;
      updated_at: string;
    };
  };
}

type TNavUser = {
  user: IUser;
};

export function Navbar({ user }: TNavUser) {
  
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="Gear Up Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <UserMenu user={user} />

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile nav links */}
      {mobileOpen && (
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

function UserMenu({ user }: TNavUser) {
  const router = useRouter();
  const handelUserMenuAction = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("Logged Out Successful");
      router.push("/login");
    }
  };

  return (
    <div>
      {user?.success ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="size-8">
                <AvatarImage src={user?.data?.profile?.profileImage} />
                <AvatarFallback>
                  {user?.data?.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="sr-only">Open user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              <span className="text-sm font-medium">{user.data?.name}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {user.data?.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {userMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>
                    <Icon className="mr-2 size-4" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                await handelUserMenuAction("logout");
              }}
              variant="destructive"
            >
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <span className="flex gap-4">
          <Link href={"/login"}>
            <Button
              size="lg"
              variant="outline"
              className="font-bold shadow-2xl hover:bg-cyan-600 hover:text-white"
            >
              Login
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button
              size="lg"
              variant="outline"
              className="font-bold shadow-2xl hover:bg-cyan-600 hover:text-white"
            >
              Register
            </Button>
          </Link>
        </span>
      )}
    </div>
  );
}
