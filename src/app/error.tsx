"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-white to-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-2xl border bg-white p-10 text-center shadow-xl"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100"
        >
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </motion.div>

        <h1 className="mb-2 text-3xl font-bold">Something went wrong</h1>

        <p className="mb-8 text-muted-foreground">
          An unexpected error occurred while processing your request. Please try
          again or return to the homepage.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
