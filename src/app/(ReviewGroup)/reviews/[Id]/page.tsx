import { getReviewById } from "../../_actions/getReviewById";
import ReviewCard from "../../_components/ReviewCard";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ReviewDetails({ params }: Props) {
  const { id } = await params;

  const review = await getReviewById(Number(id));

  return <ReviewCard review={review.data} />;
}
