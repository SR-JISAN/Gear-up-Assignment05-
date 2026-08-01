import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  name: string;
  brand: string;
  price_per_day: number;
  availability: string;
  stock: number;
  category?: {
    name: string;
  };
};

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({
  products,
}: ProductTableProps) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="mb-5 text-xl font-semibold">
        My Products
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Price/Day</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center"
              >
                No Products Found
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>

                <TableCell>
                  {product.category?.name ?? "N/A"}
                </TableCell>

                <TableCell>{product.brand}</TableCell>

                <TableCell>
                  $ {product.price_per_day}
                </TableCell>

                <TableCell>{product.stock}</TableCell>

                <TableCell>
                  <Badge>
                    {product.availability}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}