"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import StarRating from "./StarRating";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { createReview } from "../_actions/createReview";
import { updateReview } from "../_actions/updateReview";

interface ReviewFormProps {
  productId?: number;

  review?: {
    id: number;
    rating: number;
    comment: string;
  };

  isEditing?: boolean;
}

export default function ReviewForm({ productId, review }: ReviewFormProps) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const [rating, setRating] = useState(review?.rating || 0);

  const [comment, setComment] = useState(review?.comment || "");

  const handleSubmit = () => {
    if (!rating) {
      toast.error("Please select a rating.");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please write a review.");
      return;
    }

    startTransition(async () => {
      let result;

      if (review) {
        result = await updateReview(review.id, {
          rating,
          comment,
        });
      } else {
        result = await createReview({
          productId: productId!,
          rating,
          comment,
        });
      }

      if (result.success) {
        toast.success(result.message);

        router.refresh();

        router.push("/my-reviews");
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>{review ? "Update Review" : "Write a Review"}</CardTitle>

        <CardDescription>
          Share your experience with this product.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <p className="font-medium">Rating</p>

          <StarRating value={rating} onChange={setRating} />
        </div>

        <div className="space-y-2">
          <p className="font-medium">Comment</p>

          <Textarea
            rows={6}
            value={comment}
            placeholder="Write your experience..."
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <Button disabled={pending} onClick={handleSubmit} className="w-full">
          {pending
            ? "Submitting..."
            : review
              ? "Update Review"
              : "Submit Review"}
        </Button>
      </CardContent>
    </Card>
  );
}
