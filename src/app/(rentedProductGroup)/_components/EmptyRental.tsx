export default function EmptyRental() {
  return (
    <div className="rounded-xl border py-20 text-center">
      <h3 className="text-xl font-semibold">No Rentals Found</h3>

      <p className="text-muted-foreground">
        You have not rented any products yet.
      </p>
    </div>
  );
}
