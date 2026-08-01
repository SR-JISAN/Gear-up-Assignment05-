import { Badge } from "@/components/ui/badge";

interface Props {
  status: "SUCCESS" | "FAILED" | "PENDING" | "CANCELLED";
}

export default function PaymentStatusBadge({ status }: Props) {
  switch (status) {
    case "SUCCESS":
      return <Badge className="bg-green-600">Paid</Badge>;

    case "FAILED":
      return <Badge variant="destructive">Failed</Badge>;

    case "CANCELLED":
      return <Badge className="bg-gray-500">Cancelled</Badge>;

    default:
      return <Badge variant="secondary">Pending</Badge>;
  }
}
