"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container rounded-3xl  p-16 text-center"
      >
        <h2 className="text-5xl font-bold text-black">
          Ready for Your Next Adventure?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-black/80">
          Discover premium sports and outdoor gear available for rent.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-8 bg-black text-white hover:bg-neutral-900"
        >
          <Link href="/products">Explore Products</Link>
        </Button>
      </motion.div>
    </section>
  );
}
