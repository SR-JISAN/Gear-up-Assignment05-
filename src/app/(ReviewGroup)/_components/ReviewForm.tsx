"use client";

import { useActionState, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";


interface ReviewFormProps {
  productId?: number;
  initialRating?: number;
  initialComment?: string;
  action: (
    state: { success: boolean; message: string },
    formData: FormData,
  ) => Promise<{ success: boolean; message: string }>;
}

const initialState = {
  success: false,
  message: "",
};

export default function ReviewForm({
  productId,
  initialRating = 0,
  initialComment = "",
  action,
}: ReviewFormProps) {
  const [rating, setRating] = useState(initialRating);

  const [state, formAction, pending] = useActionState(action, initialState);
const router = useRouter();

  
 
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      router.push("/my-reviews");
          router.refresh();
    } else {
      toast.error(state.message);
    }
  }, [state,router]);

  return (
    <form action={formAction} className="space-y-6">
      {productId && <input type="hidden" name="productId" value={productId} />}

      <input type="hidden" name="rating" value={rating} />

      <div className="space-y-3">
        <Label>Rating</Label>

        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setRating(index + 1)}
            >
              <Star
                className={`h-8 w-8 transition ${
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label>Comment</Label>

        <Textarea
          name="comment"
          rows={6}
          defaultValue={initialComment}
          placeholder="Share your experience..."
          required
        />
      </div>

      <Button className="w-full" disabled={pending}>
        {pending ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
}
