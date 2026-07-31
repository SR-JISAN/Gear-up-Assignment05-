"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  title: string;
  details: string;
  product_image: string | null;
  price_per_day: string;
  availability: "AVAILABLE" | "OUT_OF_STOCK";
  stock: number;

  category: {
    id: number;
    name: string;
  };

  provider: {
    id: string;
    name: string;
    email: string;
  };
}

interface Props {
  product: Product;
}

export default function OrderSummary({ product }: Props) {
  return (
    <Card className="sticky top-24 overflow-hidden rounded-2xl shadow-md">
      <div className="relative h-64 w-full bg-muted">
        <Image
          src={product.product_image || "/placeholder.png"}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-6 p-6">
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>

          <Badge
            className="mt-3"
            variant={
              product.availability === "AVAILABLE" ? "default" : "destructive"
            }
          >
            {product.availability}
          </Badge>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          {product.details}
        </p>

        <div className="space-y-3 border-y py-4">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Category</span>

            <span className="font-medium">{product.category.name}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Provider</span>

            <span className="font-medium">{product.provider.name}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Stock</span>

            <span
              className={`font-semibold ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock}
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-primary/5 p-5">
          <p className="text-sm text-muted-foreground">Rental Price</p>

          <h2 className="mt-2 text-4xl font-bold text-primary">
            ${product.price_per_day}
            <span className="text-lg text-muted-foreground">/day</span>
          </h2>
        </div>

        <div className="rounded-xl border p-5">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Estimated Total</span>

            <span className="text-xl font-bold">${product.price_per_day}</span>
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Total will automatically update after selecting rental dates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
