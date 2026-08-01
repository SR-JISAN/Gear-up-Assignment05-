import { Badge } from "@/components/ui/badge";

export default function OrderStatusBadge({ status }: { status: string }) {
  switch (status) {
    case "PAID":
      return <Badge className="bg-green-600">Paid</Badge>;

    case "PROCESSING":
      return <Badge variant="secondary">Processing</Badge>;

    case "CANCELLED":
      return <Badge variant="destructive">Cancelled</Badge>;

    case "RETURNED":
      return <Badge>Returned</Badge>;

    default:
      return <Badge>{status}</Badge>;
  }
}
