"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Textarea } from "@/components/ui/textarea";

import SubmitButton from "./SubmitButton";
import {
  updateReviewAction,
  type UpdateReviewState,
} from "../_actions/updateReview";

type Props = {
  review: {
    id: number;
    rating: number;
    comment: string;
  };
};

const initialState: UpdateReviewState = {
  success: false,
  message: "",
};

export default function EditReviewForm({ review }: Props) {
  const router = useRouter();

  const updateReview = updateReviewAction.bind(null, review.id);

  const [state, formAction] = useActionState(updateReview, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/my-reviews");
      router.refresh();
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="max-w-xl space-y-6 rounded-xl border p-6"
    >
      <div>
        <label className="font-semibold">Rating</label>

        <select
          name="rating"
          defaultValue={review.rating}
          className="mt-2 w-full rounded-md border p-2"
        >
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">Comment</label>

        <Textarea
          name="comment"
          defaultValue={review.comment}
          className="mt-2"
        />
      </div>

      {state.message && (
        <p className={state.success ? "text-green-600" : "text-red-500"}>
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
