"use client";

import Link from "next/link";
import { MessageSquareText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyReviewProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function EmptyReview({
  title = "No Reviews Yet",
  description = "Be the first customer to share your experience with this product.",
  buttonText = "Browse Products",
  buttonLink = "/products",
}: EmptyReviewProps) {
  return (
    <Card className="border-dashed shadow-sm">
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <MessageSquareText className="h-10 w-10 text-primary" />
        </div>

        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="mt-3 max-w-md text-muted-foreground">{description}</p>

        <Button asChild className="mt-8">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
