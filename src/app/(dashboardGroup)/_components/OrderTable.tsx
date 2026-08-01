"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProviderOrder } from "../_actions/dashboardType";

type ProviderStatsProps = {
  orders: ProviderOrder[];
};

export default function OrderTable({ orders }: ProviderStatsProps) {
  return (
    <div
      className="
border rounded-xl p-5
"
    >
      <h2
        className="
text-xl font-bold mb-4
"
      >
        Rental Orders
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>

            <TableHead>Email</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order: ProviderOrder) => (
            <TableRow key={order.id}>
              <TableCell>{order.customer.name}</TableCell>

              <TableCell>{order.customer.email}</TableCell>

              <TableCell>{order.status}</TableCell>

              <TableCell>$ {order.total_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
