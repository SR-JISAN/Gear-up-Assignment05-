import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  return (
    <div className="container flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 text-center shadow-lg">
        <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />

        <h1 className="mt-6 text-3xl font-bold">Payment Successful 🎉</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment has been completed successfully. Your rental order has
          been confirmed.
        </p>

        {session_id && (
          <div className="mt-6 rounded-lg bg-muted p-3">
            <p className="text-sm text-muted-foreground">Session ID</p>

            <p className="mt-1 break-all font-mono text-xs">{session_id}</p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3">
          <Link href="/dashboard/customer/orders">
            <Button className="w-full">View My Orders</Button>
          </Link>

          <Link href="/">
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
