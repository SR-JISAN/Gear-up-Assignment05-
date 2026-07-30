import ViewProducts from "./ViewProducts";


export default function TopPicks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
      
        <div className="mb-10 flex items-center justify-center">
          <div>
            <p className="text-4xl font-semibold text-muted-foreground">
              Explore Our
            </p>

            <h2 className="text-5xl font-bold">Top Picks</h2>
          </div>
        </div>

        <ViewProducts></ViewProducts>
      </div>
    </section>
  );
}
