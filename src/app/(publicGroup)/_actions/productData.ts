type Query = {
  search?: string;
  category?: string;
  availability?: string;
};

export const getProducts = async ({
  search,
  category,
  availability,
}: Query = {}) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (category) params.append("category", category);
  if (availability) params.append("availability", availability);

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/products?${params.toString()}`,
    {
      cache: "no-store",
    },
  );

  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_APP_URL}/api/products/categories`,
    {
      cache: "no-store",
    },
  );
   console.log("Fetching:", res);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export const getSingleProduct = async (id: string) => {
  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/products/single/${id}`,
    {
      cache: "no-store",
    },
  );
  console.log("Fetching:", res);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};
