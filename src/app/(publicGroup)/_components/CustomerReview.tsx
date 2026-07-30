"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Excellent rental service! The equipment arrived in perfect condition and made my workout routine much easier.",
  },
  {
    id: 2,
    name: "Michael Brown",
    rating: 5,
    review:
      "Affordable prices and amazing customer support. Highly recommend GearUp for fitness enthusiasts.",
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 4,
    review:
      "Great selection of sports equipment. Delivery was fast and everything worked perfectly.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>

          <h2 className="mt-2 text-4xl font-bold">What Our Customers Say</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real feedback from customers who trust GearUp for their fitness and
            sports equipment rentals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarFallback className="bg-primary text-lg font-semibold text-primary-foreground">
                    {review.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-semibold">{review.name}</h3>

                  <div className="mt-1 flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-7 text-muted-foreground">
                “{review.review}”
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
