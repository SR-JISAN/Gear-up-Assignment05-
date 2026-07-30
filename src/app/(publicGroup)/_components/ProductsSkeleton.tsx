import { Dumbbell } from "lucide-react";

export default function ProductsSkeleton() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl">
            <Dumbbell className="h-10 w-10 animate-bounce" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">GearUp</h2>

          <p className="text-muted-foreground animate-pulse">
            Loading amazing gear...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-64 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}