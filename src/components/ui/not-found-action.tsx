"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFoundActions() {
  const router = useRouter();

  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
      <Button
        variant="outline"
        size="lg"
        onClick={() => router.back()}
        className="w-full sm:w-auto"
      >
        <ArrowLeft className="size-4" />
        Go back
      </Button>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
      >
        <Home className="size-4" />
        Back home
      </Link>
    </div>
  );
}
