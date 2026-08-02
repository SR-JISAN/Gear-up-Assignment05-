"use client";

import EmptyReview from "./EmptyReview";
import ReviewCard from "./ReviewCard";


interface Review {
  id: number;
  rating: number;
  comment: string;
  created_at: string;

  user: {
    id: string;
    name: string;
    profileImage?: string | null;
  };

  product: {
    id: number;
    title: string;
    brand: string;
    product_image?: string | null;
  };
}

interface ReviewListProps {
  reviews: Review[];
  showActions?: boolean;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function ReviewList({
  reviews,
  showActions = false,
  onEdit,
  onDelete,
}: ReviewListProps) {
  if (!reviews || reviews.length === 0) {
    return <EmptyReview />;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Customer Reviews</h2>

          <p className="text-sm text-muted-foreground">
            {reviews.length} Review
            {reviews.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            showActions={showActions}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}
