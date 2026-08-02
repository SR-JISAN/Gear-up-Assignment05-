import { createReviewAction } from "@/app/(ReviewGroup)/_actions/createReview";
import ReviewForm from "@/app/(ReviewGroup)/_components/ReviewForm";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function CreateReviewPage({ params }: Props) {
  const { productId } = await params;

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Write Review</h1>
        <p className="mt-2 text-muted-foreground">
          Share your experience with this product.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <ReviewForm
          productId={Number(productId)}
          action={createReviewAction}
        />
      </div>
    </div>
  );
}