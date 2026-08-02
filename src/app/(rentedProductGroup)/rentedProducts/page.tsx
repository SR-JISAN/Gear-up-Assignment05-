import { getMyRentals } from "../_actions/getMyRentals";
import RentalsTable from "../_components/RentalsTable";


export default async function RentalsPage() {
  const rentals = await getMyRentals();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">My Rentals</h2>

        <p className="text-muted-foreground">
          View all rented products and leave reviews.
        </p>
      </div>

      <RentalsTable rentals={rentals} />
    </div>
  );
}
