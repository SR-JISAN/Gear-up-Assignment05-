import { getCategories } from "../_actions/productActions";
import ProductForm from "../_components/ProductForm";

export default async function AddProductPage() {
  const categories = await getCategories();

  return (
    <div className=" py-9">
      <div className="mb-8 text-center">
        <div className="mb-2 flex justify-center items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm  font-medium text-muted-foreground">
            Product Management
          </span>
        </div>

        <h1 className="text-3xl  font-bold tracking-tight sm:text-4xl">
          Add New Product
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
          Add a new rental product with its details, pricing, stock, and
          availability.
        </p>
      </div>
      <ProductForm categories={categories} />;
    </div>
  );
  
  
}
