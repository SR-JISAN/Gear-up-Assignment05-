"use server";

import { cookies } from "next/headers";
import { IPayment } from "./paymentType";



export interface IGetPaymentsResponse {
  success: boolean;
  message: string;
  data: IPayment[];
}

export async function getPayments(): Promise<IGetPaymentsResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/payments/history`,
    {
      headers: {
        Authorization: accessToken!,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message,
      data: [],
    };
  }

  return {
    success: true,
    message: result.message,
    data: result.data,
  };
}
