"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Package,  DollarSign } from "lucide-react";

interface ProductInfoProps {
  product: {
    id: number;
    title: string;
    brand: string;
    product_image: string | null;
    price_per_day: number | string;
  };
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <Card className="overflow-hidden shadow-md">
      <CardContent className="p-0">
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <div className="relative h-64 w-full bg-muted md:h-full">
            <Image
              src={product.product_image || "/placeholder.png"}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-5 p-6">
            <Badge className="w-fit">Product Information</Badge>

            <h2 className="text-3xl font-bold">{product.title}</h2>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Package className="h-5 w-5" />

              <span>{product.brand}</span>
            </div>

            <div className="flex items-center gap-2 text-lg font-semibold">
              <DollarSign className="h-5 w-5 text-primary" />

              <span>$ {product.price_per_day} / Day</span>
            </div>

            <p className="text-sm text-muted-foreground">
              You can submit a review only after returning this rented product.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
