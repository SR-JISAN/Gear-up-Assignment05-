"use server";

import { cookies } from "next/headers";

export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  title: string;
  details: string;
  brand: string;
  stock: number;
  price_per_day: string;
  product_image: string;
  condition: "NEW" | "USED";
  availability: "AVAILABLE" | "OUT_OF_STOCK";
  providerId: string;
  category: ICategory;
}

export interface IRentalItem {
  id: number;
  quantity: number;
  pricePerDay: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  subTotal: string;
  product: IProduct;
}

export interface ICustomer {
  id: string;
  name: string;
  email: string;
}

export interface IOrder {
  id: number;
  totalAmount: string;
  orderStatus:
    | "PROCESSING"
    | "CONFIRM"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "CANCELLED";

  pickUpAddress: string;
  pickUpDate: string | null;
  returnDate: string | null;

  createdAt: string;

  customer?: ICustomer;

  rentalItem: IRentalItem[];
}

export async function getSingleOrder(id: string): Promise<IOrder> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/orders/single/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  return result.data;
}
