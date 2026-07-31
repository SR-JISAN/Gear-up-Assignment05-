"use client";

import { useMemo, useState } from "react";

import RentalInfo from "./RentalInfo";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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

export default function OrderForm({ product }: Props) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("STRIPE");

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

  const handleSubmit = () => {
    console.log({
      productId: product.id,
      startDate,
      endDate,
      quantity,
      notes,
      paymentMethod,
      total,
    });

  };

  return (
    <div className="space-y-6">
      <RentalInfo
        startDate={startDate}
        endDate={endDate}
        quantity={quantity}
        notes={notes}
        stock={product.stock}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setQuantity={setQuantity}
        setNotes={setNotes}
      />


      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>

        <CardContent>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="STRIPE" id="stripe" />

              <Label htmlFor="stripe">Stripe</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="CASH" id="cash" />

              <Label htmlFor="cash">Cash on Delivery</Label>
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
        className="w-full h-12"
        size="lg"
        onClick={handleSubmit}
        disabled={rentalDays === 0 || product.stock === 0}
      >
        Rent Now
      </Button>
    </div>
  );
}
