import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rentals = [
  {
    name: "Motorized Treadmill",
    date: "12 Aug",
    status: "Active",
  },
  {
    name: "Olympic Barbell",
    date: "18 Aug",
    status: "Returning Soon",
  },
];

export default function ActiveRentals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Rentals</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {rentals.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>

              <p className="text-sm text-muted-foreground">
                Return: {item.date}
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              {item.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
