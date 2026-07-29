"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  Bell,
  HelpCircle,
  Heart,
  Download,
} from "lucide-react";

// Navigation links array
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// Profile menu items array
const profileMenuItems = [
  { href: "/profile", label: "My Profile", icon: User },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/downloads", label: "Downloads", icon: Download },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/help", label: "Help & Support", icon: HelpCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href;

//   const handleSignOut = () => {
//     setIsSignedIn(false);
//     setUser({ name: "", email: "" });
//   };

//   const handleSignIn = () => {
//     setIsSignedIn(true);
//   };

  return (
    <nav className="sticky top-0 z-50 mx-auto rounded-2xl  bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 w-full md:w-11/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              GEAR UP
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Auth buttons or Profile menu */}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              // Profile Menu
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                  >
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5 text-sm">
                    <p className="font-semibold text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  {profileMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="cursor-pointer">
                          <Icon className="w-4 h-4 mr-2" />
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                   
                    className="cursor-pointer text-destructive"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Auth buttons
              <div className="hidden sm:flex items-center gap-2">
                <Link href="/login">
                  <Button
                    className="hover:bg-cyan-600 hover:text-white hover:shadow-xl"
                    variant="outline"
                    size="lg"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    className="hover:bg-cyan-600 hover:text-white hover:shadow-xl"
                    variant="outline"
                    size="lg"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div ref={menuRef} className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {!isSignedIn && (
              <div className="border-t border-border px-2 py-3 space-y-2">
                <Link href="/login">
                  <Button
                    className="w-full hover:bg-cyan-600 hover:text-white hover:shadow-xl"
                    variant="outline"
                    size="lg"
                  >
                    LOG IN
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    className="w-full hover:bg-cyan-600 hover:text-white hover:shadow-xl"
                    variant="outline"
                    size="lg"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}

          
            {isSignedIn && (
              <div className="border-t border-border px-2 py-3 space-y-2">
                <div className="px-3 py-2 text-sm">
                  <p className="font-semibold text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <div className="border-t border-border my-2" />
                {profileMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Link>
                  );
                })}
                <div className="border-t border-border my-2" />
                <button
                //   onClick={() => {
                //     handleSignOut();
                //     setIsOpen(false);
                //   }}
                  className="w-full flex items-center text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-accent text-destructive"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
