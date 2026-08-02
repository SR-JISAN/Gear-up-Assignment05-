import { Badge } from "@/components/ui/badge";

export default function RentalStatusBadge({ status }: { status: string }) {
  if (status === "RETURNED") {
    return <Badge>Returned</Badge>;
  }

  if (status === "ONGOING") {
    return <Badge variant="secondary">Ongoing</Badge>;
  }

  return <Badge variant="destructive">{status}</Badge>;
}
