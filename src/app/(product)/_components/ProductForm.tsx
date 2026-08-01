"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { createProduct } from "../_actions/productActions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = {
  id: number;
  name: string;
};

type ProductFormProps = {
  categories: Category[];
};

export default function ProductForm({ categories }: ProductFormProps) {
  const [pending, startTransition] = useTransition();
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await createProduct(formData);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-5 rounded-xl border p-6">
      <Input name="title" placeholder="Product Title" required />

      <Textarea name="details" placeholder="Product Details" required />

      <Input name="brand" placeholder="Brand" required />

      <Input type="number" name="stock" placeholder="Stock" required />

      <Input
        type="number"
        name="price_per_day"
        placeholder="Price Per Day"
        required
      />

      <Input name="product_image" placeholder="Image URL" />

      
      <input type="hidden" name="categoryId" value={categoryId} />

      <Select value={categoryId} onValueChange={setCategoryId}>
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name} (ID: {category.id})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Creating..." : "Create Product"}
      </Button>
    </form>
  );
}
