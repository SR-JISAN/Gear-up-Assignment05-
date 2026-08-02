import Link from "next/link";
import { Pencil } from "lucide-react";


import { Button } from "@/components/ui/button";
import ReviewCard from "../_components/ReviewCard";
import DeleteReviewDialog from "../_components/DeleteReviewDialog";
import { getMyReviews } from "../_actions/getMyReviews";

export default async function MyReviewsPage() {
  const reviews = await getMyReviews();

  if (!reviews.success || reviews.data.length === 0) {
    return (
      <section className="container py-20">
        <div className="rounded-xl border border-dashed py-20 text-center">
          <h2 className="text-2xl font-bold">No Reviews Yet</h2>

          <p className="mt-2 text-muted-foreground">
            You have not reviewed any rented products.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">My Reviews</h1>

        <p className="text-muted-foreground">
          Manage all your product reviews.
        </p>
      </div>

      <div className="space-y-6">
        {reviews.data.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <ReviewCard review={review} />

            <div className="mt-5 flex justify-end gap-3">
              <Button asChild variant="outline">
                <Link href={`/reviews/edit/${review.id}`}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>

              <DeleteReviewDialog reviewId={review.id} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
