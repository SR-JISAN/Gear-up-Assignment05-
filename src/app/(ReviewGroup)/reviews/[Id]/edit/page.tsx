import { getReviewById } from "@/app/(ReviewGroup)/_actions/getReviewById";
import ReviewForm from "@/app/(ReviewGroup)/_components/ReviewForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditReviewPage({ params }: Props) {
  const { id } = await params;

  const review = await getReviewById(Number(id));

  return <ReviewForm review={review.data} isEditing={true} />;
}
