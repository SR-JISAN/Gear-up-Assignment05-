// src/data/products.ts

export const getProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await res.json();

  console.log(result)

  return result 
};
