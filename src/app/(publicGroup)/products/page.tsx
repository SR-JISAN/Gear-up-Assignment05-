import { Suspense } from "react";
import ProductFilters from "../_components/ProductFilters";
import Products from "../_components/Products";
import ProductsSkeleton from "../_components/ProductsSkeleton";
import Footer from "@/components/share/Footer";



interface Props {
  searchParams: Promise<{
    search?: string;
    category?: string;
    availability?: string;
  }>;
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
    
    <div className="space-y-12">
      <div className="space-y-4 pt-5 text-center">
        <h1 className="text-4xl font-bold">
          Rent Now &
          <br />
          <span className="text-3xl font-semibold text-muted-foreground">
            Gear Up Your Daily Workout
          </span>
        </h1>
      </div>

      <ProductFilters />

      <Suspense
        key={`${params.search}-${params.category}-${params.availability}`}
        fallback={<ProductsSkeleton />}
      >
        <Products
          search={params.search}
          category={params.category}
          availability={params.availability}
        />
      </Suspense>
    </div>

    <Footer/>
    </>
    
  );
}
