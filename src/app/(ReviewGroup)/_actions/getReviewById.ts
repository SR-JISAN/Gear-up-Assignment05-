export async function getReviewById(id: number) {
  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/reviews/${id}`, {
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to get review");
  }

  return result;
}
