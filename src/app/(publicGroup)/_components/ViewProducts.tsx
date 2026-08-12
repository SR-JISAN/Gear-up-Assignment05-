"use server"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../_actions/productData';

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

const ViewProducts = async () => {
     const result = await getProducts();

    const products = result.data.data;
     const items: Product[]  = products.slice(0, 3);
    return (
      <div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
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
                    ${item.price_per_day}/Day
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

        <div className="mt-12 flex justify-center">
          <Link href="/products">
            <Button className="rounded-full px-8">
              View All Products
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default ViewProducts;