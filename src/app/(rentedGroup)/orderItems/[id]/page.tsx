import { getSingleProduct } from "@/app/(publicGroup)/_actions/productData";
import OrderForm from "../../_components/OrderForm";
import OrderSummary from "../../_components/OrderSummary";
import Footer from "@/components/share/Footer";
import RentalInfo from "../../_components/RentalInfo";
import UpdateStatusForm from "../../_components/UpdateStatusForm";
import OrderInformation from "../../_components/OrderInformation";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function RentPage({ params }: Props) {
  const { id } = await params;

  const result = await getSingleProduct(id);

  const product = result.data;

  return (
    <>
      <section className="container mx-auto py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Rent Equipment</h1>

          <p className="text-muted-foreground mt-2">
            Complete the form below to rent this equipment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <OrderForm product={product} />
          </div>

          <OrderSummary product={product} />
        </div>
      </section>
      <Footer />
    </>
  );
}
