import PaymentButton from "../_components/PaymentButton";


interface Props {
  searchParams: Promise<{
    orderId?: string;
  }>;
}

export default async function PaymentPage({ searchParams }: Props) {
  const { orderId } = await searchParams;

  if (!orderId) {
    return <div className="text-center text-red-500">Order ID not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <PaymentButton orderId={orderId} />
    </div>
  );
}
