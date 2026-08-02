"use client";

import { motion } from "framer-motion";

const timeline = [
  "Founded in 2024",
  "100+ Rental Products",
  "1,000+ Happy Customers",
  "Expanding Nationwide",
];

export default function Timeline() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>

        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border p-8"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
