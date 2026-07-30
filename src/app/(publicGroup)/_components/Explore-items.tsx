import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProducts } from "../_actions/productData";

interface Product {
  id: number;
  title: string;
  details: string;
  product_image: string | null;
  price_per_day: string;
  availability: "AVAILABLE" | "UNAVAILABLE";
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

export default async function TopPicks() {
  const result = await getProducts();
  const items : Product[] = result.data;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-4xl font-semibold text-muted-foreground">
              Explore Our
            </p>

            <h2 className="text-5xl font-bold">Top Picks</h2>
          </div>

          <div className="flex gap-3">
            <Button size="icon" variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <Button size="icon" variant="outline" className="rounded-full">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.product_image || "/placeholder.png"}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="space-y-2 p-5">
                <h3 className="line-clamp-1 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {item.details}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-primary">
                    ৳{item.price_per_day}/day
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {item.availability}
                  </span>
                </div>

                <Link href={`/products/${item.id}`}>
                  <Button className="mt-4 w-full">View Details</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/products">
            <Button className="rounded-full px-8">
              View All Products
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
