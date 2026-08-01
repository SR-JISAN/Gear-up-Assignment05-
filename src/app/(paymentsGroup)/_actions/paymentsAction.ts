"use server";

import { cookies } from "next/headers";

export type TPaymentState = {
  success: boolean;
  message: string;
  checkoutUrl?: string;
};

export const paymentAction = async (
  prevState: TPaymentState,
  formData: FormData,
): Promise<TPaymentState> => {
  try {
    const orderId = Number(formData.get("orderId"));

    if (!orderId) {
      return {
        success: false,
        message: "Order ID missing",
      };
    }

    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }

    const res = await fetch(
      `${process.env.BACKEND_APP_URL}/api/payments/checkout`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          orderId,
        }),
      },
    );

    const result = await res.json();

    if (!res.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Payment initialization failed",
      };
    }

    return {
      success: true,

      message: result.message || "Checkout created",

      checkoutUrl: result.data.checkoutUrl,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
