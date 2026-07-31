import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function QuickActions() {
  return (
    <Card>
      <CardContent className="space-y-3 p-6">
        <Button asChild className="w-full">
          <Link href="/products">Browse Products</Link>
        </Button>

        <Button variant="outline" asChild className="w-full">
          <Link href="/my-orders">My Orders</Link>
        </Button>

        <Button variant="secondary" asChild className="w-full">
          <Link href="/profile">Edit Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

