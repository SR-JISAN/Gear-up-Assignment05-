import CategoryForm from "../_components/CategoryForm";


export default function AddCategoryPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Add Category</h1>

        <p className="text-muted-foreground">Create a new product category.</p>
      </div>

      <CategoryForm />
    </div>
  );
}
