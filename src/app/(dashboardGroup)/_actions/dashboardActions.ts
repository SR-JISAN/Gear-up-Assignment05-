import { cookies } from "next/headers";

export const getCustomerDashboard = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/orders/all`, {
    headers: {
      Authorization: token ?? "",
    },
    cache: "no-store",
  });

  return res.json();
};
