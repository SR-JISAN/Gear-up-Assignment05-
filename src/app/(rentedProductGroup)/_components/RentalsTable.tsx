"use client";

import Image from "next/image";

import { IRental } from "../_actions/rentalTypes";
import RentalStatusBadge from "./RentalStatusBadge";
import ReviewButton from "./ReviewButton";

export default function RentalsTable({ rentals }: { rentals: IRental[] }) {
   
    return (
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Rental</th>
              <th className="px-6 py-4 text-left">Return</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {rentals.map((order) =>
              order.rentalItem.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">
                    <Image
                      src={item.product.product_image}
                      alt={item.product.title}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-semibold">{item.product.title}</p>

                    <p className="text-sm text-muted-foreground">
                      {item.product.brand}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <RentalStatusBadge status={order.orderStatus} />
                  </td>

                  <td className="px-6 py-4">
                    {new Date(item.startDate).toLocaleDateString("en-CA")}
                  </td>

                  <td className="px-6 py-4">
                    {new Date(item.endDate).toLocaleDateString("en-CA")}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <ReviewButton
                      status={order.orderStatus}
                      productId={item.product.id}
                      reviewId={item.product.reviews[0]?.id}
                    />
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    );
}
