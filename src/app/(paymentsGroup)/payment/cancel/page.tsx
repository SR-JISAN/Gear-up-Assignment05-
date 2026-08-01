import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <div className="container flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 text-center shadow-lg">
        <XCircle className="mx-auto h-20 w-20 text-red-500" />

        <h1 className="mt-6 text-3xl font-bold">Payment Cancelled</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment was cancelled. No money has been charged to your account.
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          You can return to your order and try the payment again whenever you are
          ready.
        </p>

        <div className="mt-8 flex flex-col gap-3">

          <Link href="/">
            <Button variant="outline" className="w-full text-lg hover:bg-cyan-500 hover:text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
