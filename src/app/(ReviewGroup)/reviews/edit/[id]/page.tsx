import { getReviewById } from "@/app/(ReviewGroup)/_actions/getReviewById";

import EditReviewForm from "@/app/(ReviewGroup)/_components/EditReviewForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditReviewPage({ params }: Props) {
  const { id } = await params;

  const review = await getReviewById(Number(id));

  return (
    <div className="container w-11/12 md:w-10/12 mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Edit Review</h1>

      <EditReviewForm review={review.data} />
    </div>
  );
}
