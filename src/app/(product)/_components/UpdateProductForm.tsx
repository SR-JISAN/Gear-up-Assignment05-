"use client";

import { toast } from "sonner";
import { updateProductAction } from "../_actions/getSingleProductAction";
import { IProduct } from "@/app/(rentedGroup)/_actions/getSingleOrderAction";

export default function UpdateProductForm({ product }: { product: IProduct }) {
  async function action(formData: FormData) {
    const res = await updateProductAction(product.id, formData);

    if (res.success) {
      toast.success("Product Updated");
    } else {
      toast.error(res.message);
    }
  }

  return (
    <form action={action} className="space-y-5">
      <input
        name="title"
        defaultValue={product.title}
        className="w-full border rounded-md p-3"
      />

      <input
        name="brand"
        defaultValue={product.brand}
        className="w-full border rounded-md p-3"
      />

      <input
        name="price_per_day"
        defaultValue={product.price_per_day}
        type="number"
        className="w-full border rounded-md p-3"
      />

      <input
        name="stock"
        defaultValue={product.stock}
        type="number"
        className="w-full border rounded-md p-3"
      />

      <button className="bg-primary text-white rounded-md px-6 py-3">
        Update Product
      </button>
    </form>
  );
}
