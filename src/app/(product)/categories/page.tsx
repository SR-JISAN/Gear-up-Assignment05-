import { getAllCategories } from "../_actions/categoryActions";
import CategoryTable from "../_components/CategoryTable";


export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Categories</h1>

        <p className="text-muted-foreground">Manage all product categories.</p>
      </div>

      <CategoryTable categories={categories} />
    </div>
  );
}
