import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Star } from "lucide-react";

import { getReviewById } from "../../_actions/getReviewById";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReviewDetailsPage({ params }: Props) {
  
  const { id } = await params;

  const review = await getReviewById(Number(id));


  if (!review.success) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-3xl font-bold">Review Not Found</h2>
      </div>
    );
  }

  const data = review.data;

  return (
    <section className="container max-w-4xl py-10">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/reviews/my-reviews">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>

      <Card>
        <CardContent className="p-0">
          <div className="grid gap-8 md:grid-cols-[320px_1fr]">
            <div className="relative h-72 md:h-full">
              <Image
                src={data.product.product_image || "/placeholder.png"}
                alt={data.product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 p-8">
              <div>
                <h1 className="text-3xl font-bold">{data.product.title}</h1>

                <p className="text-muted-foreground">{data.product.brand}</p>
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={data.user.profileImage || ""} />
                  <AvatarFallback>{data.user.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-semibold">{data.user.name}</h4>

                  <p className="text-sm text-muted-foreground">
                    Verified Customer
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < data.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="leading-8 text-muted-foreground">{data.comment}</p>

              <Badge variant="secondary">
                <CalendarDays className="mr-2 h-4 w-4" />
                {new Date(data.created_at).toLocaleDateString()}
              </Badge>

              <div className="flex gap-3 pt-4">
                <Button asChild>
                  <Link href={`/reviews/${data.id}/edit`}>Edit Review</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
