import { MessageSquare, Star } from "lucide-react";

import { getMyReviews } from "../_actions/getMyReviews";

import ReviewList from "../_components/ReviewList";
import EmptyReview from "../_components/EmptyReview";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "../_actions/review.type";

export default async function MyReviewsPage() {
  const response = await getMyReviews();

  const reviews: Review[] = response.data ?? [];

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0";

  return (
    <div className="container mx-auto space-y-8 py-8">
      <div>
        <h1 className="text-4xl font-bold">My Reviews</h1>

        <p className="text-muted-foreground">Manage your submitted reviews.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Total Reviews</CardTitle>
          </CardHeader>

          <CardContent className="flex items-center justify-between">
            <MessageSquare className="text-primary" />
            <p className="text-4xl font-bold">{reviews.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Rating</CardTitle>
          </CardHeader>

          <CardContent className="flex items-center justify-between">
            <Star className="fill-yellow-400 text-yellow-400" />
            <p className="text-4xl font-bold">{averageRating}</p>
          </CardContent>
        </Card>
      </div>

      {reviews.length ? (
        <ReviewList reviews={reviews} showActions />
      ) : (
        <EmptyReview
          title="No Reviews Yet"
          description="You haven't submitted any reviews."
          buttonText="Browse Products"
          buttonLink="/products"
        />
      )}
    </div>
  );
}
