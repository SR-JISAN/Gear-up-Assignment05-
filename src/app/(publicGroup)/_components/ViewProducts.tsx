"use server"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../_actions/productData';
import ProductDetailsModal from './ProductDetailsModal';

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

const ViewProducts = async () => {
     const result = await getProducts();

    const product = result.data.data;
     const items: Product[]  = product.slice(0, 3);
    return (
      <div>
        {product.length !== 0 ? (
          <div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden p-5 rounded-2xl border  shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={item.product_image!}
                      alt={item.title}
                      fill
                      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                      className="object-contain rounded-2xl w-11/12 transition-transform duration-500 hover:scale-110"
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
                      <div>
                        <span className="text-lg font-bold text-green-500">
                          ${item.price_per_day}
                        </span>
                        <span className="text-lg font-bold ">/Day</span>
                      </div>

                      {item.availability === "OUT_OF_STOCK" ? (
                        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                          {item.availability}
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          {item.availability}
                        </span>
                      )}
                    </div>

                   
                    <ProductDetailsModal product={item} />
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
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-center">
              Product not found
            </h1>
          </div>
        )}
      </div>
    );
};

export default ViewProducts;