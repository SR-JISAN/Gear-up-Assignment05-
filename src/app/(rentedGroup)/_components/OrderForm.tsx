"use client";

import { useActionState, useMemo, useState } from "react";

import RentalInfo from "./RentalInfo";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { createOrderAction } from "../_actions/order.actions";
import { toast } from "sonner";
import { useEffect } from "react";

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

interface Props {
  product: Product;
}

const initialState = {
  success: false,
  message: "",
};

export default function OrderForm({ product }: Props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [pickUpAddress, setPickUpAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("STRIPE");

  const [state, action, pending] = useActionState(
    createOrderAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
    }
  }, [state]);

  const rentalDays = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

    return diff > 0 ? diff : 0;
  }, [startDate, endDate]);

  const total = useMemo(() => {
    return Number(product.price_per_day) * rentalDays * quantity;
  }, [product.price_per_day, rentalDays, quantity]);

  return (
    <form action={action} className="space-y-6">
      {/* Hidden Inputs */}
      <input type="hidden" name="productId" value={product.id} />
      <input type="hidden" name="startDate" value={startDate} />
      <input type="hidden" name="endDate" value={endDate} />
      <input type="hidden" name="quantity" value={quantity} />
      <input type="hidden" name="pickUpAddress" value={pickUpAddress} />
      <input type="hidden" name="paymentMethod" value={paymentMethod} />
      <input type="hidden" name="totalAmount" value={total} />

      <RentalInfo
        startDate={startDate}
        endDate={endDate}
        quantity={quantity}
        pickUpAddress={pickUpAddress}
        stock={product.stock}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setQuantity={setQuantity}
        setPickUpAddress={setPickUpAddress}
      />

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>

        <CardContent>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="STRIPE" id="stripe" />
              <Label htmlFor="stripe">Stripe</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rental Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Price / Day</span>
            <span>${product.price_per_day}</span>
          </div>

          <div className="flex justify-between">
            <span>Rental Days</span>
            <span>{rentalDays}</span>
          </div>

          <div className="flex justify-between">
            <span>Quantity</span>
            <span>{quantity}</span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </CardContent>
      </Card>

      <Button
        type="submit"
        className="w-full h-12"
        disabled={pending || rentalDays === 0 || product.stock === 0}
      >
        {pending ? "Creating Order..." : "Rent Now"}
      </Button>
    </form>
  );
}
