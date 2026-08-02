"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Medal, Clock } from "lucide-react";

const features = [
  {
    title: "Verified Equipment",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    icon: Truck,
  },
  {
    title: "Premium Quality",
    icon: Medal,
  },
  {
    title: "24/7 Support",
    icon: Clock,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-14">
          Why Choose GearUp?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                }}
                className="rounded-xl border bg-background p-8 text-center"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-primary" />

                <h3 className="font-semibold">{item.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
