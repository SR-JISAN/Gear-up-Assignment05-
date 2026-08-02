import { MessageSquare } from "lucide-react";


import EmptyReview from "../_components/EmptyReview";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Review } from "../_actions/review.type";

import ReviewList from "../_components/ReviewList";
import { getAllReviews } from "../_actions/getAllReviews";

export default async function ReviewsPage() {
  const response = await getAllReviews();

  const reviews = response?.data || [];

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum: number, review: Review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0";

  return (
    <div className="container w-11/12 md:w-10/12 mx-auto space-y-8 py-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">Customer Reviews</h1>

        <p className="mt-2 text-muted-foreground">
          Read real experiences shared by our customers.
        </p>
      </div>

      

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Reviews</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">{reviews.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Rating</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">⭐ {averageRating}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community</CardTitle>
          </CardHeader>

          <CardContent className="flex items-center gap-3">
            <MessageSquare className="text-primary" />

            <span>Genuine customer feedback</span>
          </CardContent>
        </Card>
      </div>

      {/* Review List */}

      {reviews.length > 0 ? <ReviewList reviews={reviews} /> : <EmptyReview />}
    </div>
  );
}
