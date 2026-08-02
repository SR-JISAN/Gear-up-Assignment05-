"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  status: string;
  productId: number;
  reviewId?: number;
}

export default function ReviewButton({ status, productId, reviewId }: Props) {
    
  if (status !== "RETURNED") {
    return (
      <Button disabled variant="secondary">
        Not Available
      </Button>
    );
  }

  if (reviewId) {
    return (
      <Link href={`/reviews/edit/${reviewId}`}>
        <Button>Edit Review</Button>
      </Link>
    );
  }

  return (
    <Button asChild>
      <Link href={`/reviews/create/${productId}`}>Write Review</Link>
    </Button>
  );
}
