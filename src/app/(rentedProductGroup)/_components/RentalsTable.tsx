"use client";

import Image from "next/image";

import { IRental } from "../_actions/rentalTypes";
import RentalStatusBadge from "./RentalStatusBadge";
import ReviewButton from "./ReviewButton";

export default function RentalsTable({ rentals }: { rentals: IRental[] }) {
  return (
    <div className="rounded-xl border">
      <table className="w-full">
        <thead>
          <tr>
            <th>Product</th>

            <th>Status</th>

            <th>Rental</th>

            <th>Return</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((order) =>
            order.rentalItem.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.product.product_image}
                      alt={item.product.title}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />

                    <div>
                      <p>{item.product.title}</p>

                      <p>{item.product.brand}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <RentalStatusBadge status={order.orderStatus} />
                </td>

                <td>{order.rentalDate}</td>

                <td>{order.returnDate}</td>

                <td>
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
