import { getCategories } from "../_actions/productActions";
import ProductForm from "../_components/ProductForm";

export default async function AddProductPage() {
  const categories = await getCategories();

  return <ProductForm categories={categories} />;
}
