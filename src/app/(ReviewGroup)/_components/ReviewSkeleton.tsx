import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ReviewSkeletonProps {
  count?: number;
}

export default function ReviewSkeleton({ count = 3 }: ReviewSkeletonProps) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-[170px_1fr]">
              {/* Product Image */}
              <Skeleton className="h-48 w-full rounded-none" />

              <div className="space-y-5 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-52" />
                    <Skeleton className="h-4 w-28" />
                  </div>

                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>

                {/* User */}
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-full" />

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-5 w-5 rounded-full" />
                  ))}
                </div>

                {/* Comment */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[75%]" />
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Skeleton className="h-9 w-24 rounded-md" />
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
