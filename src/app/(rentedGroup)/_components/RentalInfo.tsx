"use client";

import { Dispatch, SetStateAction } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  startDate: string;
  endDate: string;
  quantity: number;
  notes: string;

  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  setQuantity: Dispatch<SetStateAction<number>>;
  setNotes: Dispatch<SetStateAction<string>>;

  stock: number;
}

export default function RentalInfo({
  startDate,
  endDate,
  quantity,
  notes,
  setStartDate,
  setEndDate,
  setQuantity,
  setNotes,
  stock,
}: Props) {
  return (
    <div className="space-y-6 rounded-2xl border p-6">
      <div>
        <h2 className="text-2xl font-bold">Rental Information</h2>

        <p className="text-sm text-muted-foreground">
          Select your rental duration and quantity.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Start Date */}

        <div className="space-y-2">
          <Label>Start Date</Label>

          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>


        <div className="space-y-2">
          <Label>End Date</Label>

          <Input
            type="date"
            value={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>


      <div className="space-y-2">
        <Label>Quantity</Label>

        <Input
          type="number"
          min={1}
          max={stock}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <p className="text-xs text-muted-foreground">
          Available Stock : {stock}
        </p>
      </div>


      <div className="space-y-2">
        <Label>Additional Notes</Label>

        <Textarea
          rows={5}
          value={notes}
          placeholder="Any special instruction..."
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
}
