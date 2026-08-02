"use client";

import Image from "next/image";
import { Star, Pencil, Trash2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  review: {
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
      product_image?: string | null;
      brand: string;
    };
  };

  showActions?: boolean;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function ReviewCard({
  review,
  showActions = false,
  onEdit,
  onDelete,
}: ReviewCardProps) {
  return (
    <Card className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-[170px_1fr]">
          {/* Product Image */}
          <div className="relative h-44 md:h-full">
            <Image
              src={review.product.product_image || "/placeholder.png"}
              alt={review.product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{review.product.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {review.product.brand}
                </p>
              </div>

              <Badge variant="secondary">
                {new Date(review.created_at).toLocaleDateString()}
              </Badge>
            </div>

            {/* User */}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={review.user.profileImage || ""} />

                <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div>
                <p className="font-semibold">{review.user.name}</p>

                <p className="text-xs text-muted-foreground">
                  Verified Customer
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="leading-7 text-muted-foreground">{review.comment}</p>

            {/* Actions */}
            {showActions && (
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit?.(review.id)}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </Button>

                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete?.(review.id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
