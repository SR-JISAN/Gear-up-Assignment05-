import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Category } from "../_actions/categoryType";

type Props = {
  categories: Category[];
};

export default function CategoryTable({ categories }: Props) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="mb-5 text-2xl font-bold">All Categories</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {categories.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No Categories Found
              </TableCell>
            </TableRow>
          ) : (
            categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>

                <TableCell>{category.name}</TableCell>

                

                <TableCell>
                  <Badge>Active</Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
