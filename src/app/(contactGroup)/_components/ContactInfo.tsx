"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1700-000000",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@gearup.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9AM - 8PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="container py-20">
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-xl border bg-background p-8 text-center"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-lime-500" />

              <h3 className="font-bold">{item.title}</h3>

              <p className="mt-2 text-muted-foreground">{item.value}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
