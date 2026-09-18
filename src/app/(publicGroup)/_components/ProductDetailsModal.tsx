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

export default function ProductDetailsModal({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">View Product Details</Button>
      </DialogTrigger>
    <DialogContent
      className="
       w-[95%]
       max-w-[95%]
       sm:w-[90%]
       sm:max-w-[90%]
       md:w-[85%]
       md:max-w-[85%]
       lg:w-[80%]
       lg:max-w-[80%]
       xl:w-[75%]
       xl:max-w-[75%]
       max-h-[90vh]
       p-0
       overflow-hidden
  "
>
  <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[90vh]">

    {/* IMAGE */}
    <div
      className="
        relative
        w-full
        h-[40vh]
        sm:h-[45vh]
        md:h-[50vh]
        lg:h-[75vh]
        overflow-hidden
        bg-muted
      "
    >
      <Image
        src={product.product_image!}
        alt={product.title}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover p-[2%]"
      />
    </div>

    {/* DETAILS */}
    <div
      className="
        w-full
        max-h-[50vh]
        lg:max-h-[75vh]
        overflow-y-auto
        p-[5%]
      "
    >
      <DialogHeader>
        <DialogTitle className="text-[clamp(1.5rem,3vw,2.25rem)]">
          {product.title}
        </DialogTitle>
      </DialogHeader>

      <div className="mt-[5%] space-y-[4%]">

        <Badge
          variant={
            product.availability === "AVAILABLE"
              ? "default"
              : "destructive"
          }
          className="w-fit"
        >
          {product.availability}
        </Badge>

        <p className="text-muted-foreground leading-7">
          {product.details}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3%]">

          <div className="rounded-xl border p-[5%]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag size={18} />
              Category
            </div>

            <p className="mt-2 font-semibold">
              {product.category.name}
            </p>
          </div>

          <div className="rounded-xl border p-[5%]">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Package size={18} />
              Stock
            </div>

            <p
              className={`mt-2 font-semibold ${
                product.stock > 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? `${product.stock} Available`
                : "Out of Stock"}
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3%]">

          <div className="rounded-xl bg-muted p-[5%]">
            <div className="text-sm text-muted-foreground">
              Rental Price
            </div>

            <h2 className="mt-1 text-2xl font-bold text-primary">
              ${product.price_per_day}
              <span className="text-lg font-medium text-muted-foreground">
                /day
              </span>
            </h2>
          </div>

          <div className="rounded-xl border p-[5%]">
            <p className="font-semibold">
              Provider
            </p>

            <p className="mt-1">
              {product.provider.name}
            </p>

            <p className="text-sm text-muted-foreground break-all">
              {product.provider.email}
            </p>
          </div>

        </div>

      </div>

      <Link href={`/orderItems/${product.id}`}>
        <Button
          className="mt-[5%] h-12 w-full text-base"
          disabled={
            product.stock === 0 ||
            product.availability === "OUT_OF_STOCK"
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
