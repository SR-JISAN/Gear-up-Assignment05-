import { Badge } from "@/components/ui/badge";

interface Props {
  status: "SUCCESS" | "FAILED" | "PENDING";
}

export default function PaymentStatusBadge({ status }: Props) {
  switch (status) {
    case "SUCCESS":
      return <Badge className="bg-green-600">Paid</Badge>;

    case "FAILED":
      return <Badge variant="destructive">Failed</Badge>;

    default:
      return <Badge variant="secondary">Pending</Badge>;
  }
}
