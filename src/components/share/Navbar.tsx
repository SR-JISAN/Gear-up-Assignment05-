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

import { IUser } from "@/service/interfaceUser";

// Navbar links



type TNavUser = {
  user: IUser;
};

export function Navbar({ user }: TNavUser) {

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "All Orders", href: "/orderHistory" },

    ...(user?.data?.role === "PROVIDER"
      ? [{ label: "Add Products", href: "/postProduct" }]
      : []),
    ...(user?.data?.role === "ADMIN"
      ? [{ label: "Categories", href: "/categories" }]
      : []),
    ...(user?.data?.role === "ADMIN"
      ? [{ label: "Add Categories", href: "/postCategories" }]
      : []),
    
  ];
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Gear Up Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",

                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}

                  {active && (
                    <span
                      className="absolute"/>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <UserMenu user={user} />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <ul className="md:hidden border-t px-4 py-3"
        >
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2text-sm">
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

  const userMenuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: User,
    },

    {
      label: "Dashboard",

      href:
        user?.data?.role === "ADMIN"
          ? "/admin-dashboard"
          : user?.data?.role === "PROVIDER"
            ? "/author-dashboard"
            : "/dashboard",

      icon: LayoutDashboard,
    },

    {
      label: "Payments History",
      href: "/payments-history",
      icon: CreditCard,
    },

    {
      label: "Notifications",
      href: "/notifications",
      icon: Bell,
    },

    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },

    {
      label: "Support",
      href: "/support",
      icon: LifeBuoy,
    },
  ];

  const handleLogout = async () => {
    await logout();

    toast.success("Logged Out Successful");

    router.push("/login");
  };

  return (
    <div>
      {user?.success ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="size-8">
                <AvatarImage
                  src={user?.data?.profile?.profileImage || "/avatar.png"}
                />

                <AvatarFallback>
                  {user?.data?.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              <span className="font-medium">{user.data?.name}</span>

              <span className="text-xs text-muted-foreground">
                {user.data?.email}
              </span>

              <span className="text-xs text-primary mt-1">
                {user.data?.role}
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

            <DropdownMenuItem variant="destructive" onClick={handleLogout}>
              <LogOut className="mr-2 size-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-3">
          <Link href="/login">
            <Button>Login</Button>
          </Link>

          <Link href="/register">
            <Button variant="outline">Register</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
