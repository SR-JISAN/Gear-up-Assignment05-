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
      <div className="mb-8">
        {" "}
        <div className="mb-2 flex items-center gap-2">
          {" "}
          <span className="h-2 w-2 rounded-full bg-primary" />{" "}
          <span className="text-sm font-medium text-muted-foreground">
            {" "}
            Product Management{" "}
          </span>{" "}
        </div>{" "}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {" "}
          Update Your Product{" "}
        </h1>{" "}
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          {" "}
          Update your product details, pricing, availability, and other
          information to keep your rental listing accurate.{" "}
        </p>{" "}
      </div>
      <UpdateProductForm product={data.data} />
    </div>
  );
}
