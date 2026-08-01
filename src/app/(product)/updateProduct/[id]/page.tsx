import { getSingleProductAction } from "../../_actions/getSingleProductAction";
import UpdateProductForm from "../../_components/UpdateProductForm";


export default async function UpdateProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getSingleProductAction(Number(id));

  return (
    <div className="max-w-3xl mx-auto py-10">
      <UpdateProductForm product={data.data} />
    </div>
  );
}
