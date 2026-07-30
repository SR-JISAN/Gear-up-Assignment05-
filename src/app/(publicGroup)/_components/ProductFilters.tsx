"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useDebounce } from "@uidotdev/usehooks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { getCategories } from "../_actions/productData";

interface Category {
  id: number;
  name: string;
}

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const [categories, setCategories] = useState<Category[]>([]);

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const [category, setCategory] = useState(
    searchParams.get("category") ?? "all",
  );

  const [availability, setAvailability] = useState(
    searchParams.get("availability") ?? "all",
  );

  const debouncedSearch = useDebounce(search, 500);

  const updateQuery = (updates: Record<string, string>) => {

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (!value || value === "all") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

       router.replace(`/products?${params.toString()}`, {
         scroll: false,
       });

       router.refresh();
    });
    
  };

  useEffect(() => {
    updateQuery({
      search: debouncedSearch,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        setCategories(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setAvailability("all");

    router.replace("/products", {
      scroll: false,
    });
  };

  return (
    <div>
      <div className="flex gap-4 justify-evenly items-center">
        {/* Search */}
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="pl-10"
          />
        </div>

        <Select
          value={category}
          disabled={isPending}
          onValueChange={(value) => {
            setCategory(value);

            updateQuery({
              category: value,
            });
          }}
          
        >
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent >
            <SelectItem value="all">All Categories</SelectItem>

            {categories.map((item) => (
              <SelectItem key={item.id} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={availability}
          disabled={isPending}
          onValueChange={(value) => {
            setAvailability(value);

            updateQuery({
              availability: value,
            });
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Availability" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All</SelectItem>

            <SelectItem value="AVAILABLE">Available</SelectItem>

            <SelectItem value="OUT_OF_STOCK">OUT_OF_STOCK</SelectItem>
          </SelectContent>
        </Select>

        <div className="mt-4 flex items-center justify-between">
          {isPending && (
            <p className="text-sm text-muted-foreground animate-pulse">
              Updating products...
            </p>
          )}

          <Button variant="outline" size="sm" onClick={clearFilters}>
            <X className="mr-2 h-4 w-4" />
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
