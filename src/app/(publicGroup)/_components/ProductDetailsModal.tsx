"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, Tag } from "lucide-react";
import Link from "next/link";

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

export default function ProductDetailsModal({ products }: { products: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">View Product Details</Button>
      </DialogTrigger>

      <DialogContent className=" p-0 md:h-[65vw] lg:h-[40vw] md:max-w-6xl! md:w-[50vw] lg:w-[60vw]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-60 md:min-h-100.5 bg-muted p-4">
            <Image
              src={products.product_image || "/placeholder.png"}
              alt={products.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="p-8 flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-3xl">{products.title}</DialogTitle>
            </DialogHeader>

            <div className="mt-6 space-y-5">
              <Badge
                variant={
                  products.availability === "AVAILABLE"
                    ? "default"
                    : "destructive"
                }
                className="w-fit"
              >
                {products.availability}
              </Badge>

              <p className="text-muted-foreground leading-7">
                {products.details}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Tag size={18} />
                    Category
                  </div>

                  <p className="mt-2 font-semibold">{products.category.name}</p>
                </div>

                <div className="rounded-xl border p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Package size={18} />
                    Stock
                  </div>

                  <p
                    className={`mt-2 font-semibold ${
                      products.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {products.stock > 0
                      ? `${products.stock} Available`
                      : "Out of Stock"}
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-3 items-center">
                <div className="rounded-xl bg-muted p-2 w-full">
                  <div className="text-sm text-muted-foreground">
                    Rental Price
                  </div>

                  <h2 className="mt-1 text-2xl font-bold text-primary">
                    ${products.price_per_day}
                    <span className="text-lg font-medium text-muted-foreground">
                      /day
                    </span>
                  </h2>
                </div>

                <div className="rounded-xl border p-2 w-full">
                  <p className="font-semibold">Provider</p>

                  <p className="mt-1">{products.provider.name}</p>

                  <p className="text-sm text-muted-foreground">
                    {products.provider.email}
                  </p>
                </div>
              </div>
            </div>

            <Link href={`/orderItems/${products.id}`}>
              <Button
                className="mt-8 h-12 text-base w-full"
                disabled={
                  products.stock === 0 ||
                  products.availability === "OUT_OF_STOCK"
                }
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Rent Now
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
