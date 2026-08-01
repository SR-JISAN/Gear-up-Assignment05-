import { getPayments } from "../_actions/getPaymentsAction";
import PaymentHistoryTable from "../_components/PaymentHistoryTable";



export default async function PaymentHistoryPage() {
  const payments = await getPayments();

  return (
    <section className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Payment History</h1>

        <p className="text-muted-foreground">
          View all your payment transactions.
        </p>
      </div>

      <PaymentHistoryTable payments={payments} />
    </section>
  );
}
