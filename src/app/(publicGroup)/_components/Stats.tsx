"use client";

import CountUp from "react-countup";

const stats = [
  { number: 5000, label: "Happy Customers" },
  { number: 1200, label: "Sports Equipment" },
  { number: 98, label: "Customer Satisfaction" },
  { number: 24, label: "Support Hours" },
];

export default function Stats() {
  return (
    <section className="container py-24">
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.label} className="rounded-xl border p-8 text-center">
            <h2 className="text-5xl font-bold text-primary">
              <CountUp end={item.number} duration={3} />+
            </h2>

            <p className="mt-3 text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
