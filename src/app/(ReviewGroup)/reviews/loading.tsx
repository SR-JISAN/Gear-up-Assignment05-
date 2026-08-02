import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container py-10">
      <Skeleton className="mb-6 h-10 w-40" />

      <div className="grid gap-8 md:grid-cols-[320px_1fr]">
        <Skeleton className="h-96 w-full" />

        <div className="space-y-5">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-10 w-48" />

          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}
