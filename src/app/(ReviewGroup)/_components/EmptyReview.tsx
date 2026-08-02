import { MessageSquareText } from "lucide-react";

export default function EmptyReview() {
  return (
    <div className="rounded-2xl border border-dashed py-20 text-center">
      <MessageSquareText className="mx-auto mb-4 h-14 w-14 text-muted-foreground" />

      <h2 className="text-2xl font-bold">No Reviews Found</h2>

      <p className="mt-2 text-muted-foreground">
        You have not reviewed any products yet.
      </p>
    </div>
  );
}
