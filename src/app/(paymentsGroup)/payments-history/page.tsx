import { userInfo } from "@/service/userInfo";
import { getPayments } from "../_actions/getPaymentsAction";
import PaymentHistoryTable from "../_components/PaymentHistoryTable";

export default async function PaymentHistoryPage() {
  const result = await getPayments();
  const user = await userInfo();
  const role = user.success ? user.data.role : "CUSTOMER";

  if (!result.success) {
    return (
      <div className="container py-10">
        <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold">Payment History</h2>

          <p className="mt-3 text-muted-foreground">{result.message}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Payment History</h1>

        <p className="text-muted-foreground">
          View all your payment transactions.
        </p>
      </div>

      <PaymentHistoryTable payments={result.data} role={role} />
    </section>
  );
}
