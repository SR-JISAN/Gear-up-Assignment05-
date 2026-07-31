import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card } from "@/components/ui/card";

export default function RentalHistory() {
  return (
    <Card className="p-6">
      <h2 className="mb-5 text-xl font-semibold">Rental History</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Dumbbell Set</TableCell>
            <TableCell>12 Jul</TableCell>
            <TableCell>$140</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Exercise Bike</TableCell>
            <TableCell>8 Jul</TableCell>
            <TableCell>$250</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
