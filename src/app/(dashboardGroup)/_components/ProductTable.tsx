"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useTransition } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Pencil, Trash2 } from "lucide-react";
import { deleteProductAction } from "../_actions/deleteProductAction";


type Product = {
  id: number;
  title: string;
  brand: string;
  price_per_day: number;
  availability: string;
  stock: number;
  category?: {
    name: string;
  };
};

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({ products }: ProductTableProps) {
  const [pending, startTransition] = useTransition();

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    startTransition(async () => {
      const res = await deleteProductAction(id);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="mb-5 text-xl font-semibold">My Products</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Price/Day</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No Products Found
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>

                <TableCell>{product.category?.name ?? "N/A"}</TableCell>

                <TableCell>{product.brand}</TableCell>

                <TableCell>${product.price_per_day}</TableCell>

                <TableCell>{product.stock}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      product.availability === "AVAILABLE"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {product.availability}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button asChild size="icon" variant="outline">
                      <Link
                        href={`/dashboard/provider/updateProduct/${product.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      disabled={pending}
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
