"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 md:grid-cols-2"
      >
        <div className="rounded-2xl border p-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

          <p className="text-muted-foreground">
            Make high-quality sports equipment accessible to everyone through
            affordable rental services.
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>

          <p className="text-muted-foreground">
            Become the largest sports equipment rental platform across the
            country.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
