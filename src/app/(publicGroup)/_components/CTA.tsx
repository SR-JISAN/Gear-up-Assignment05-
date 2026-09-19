"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="my-20 py-22 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto rounded-3xl  p-16 text-center"
      >
        <h2 className="text-5xl font-bold">Ready to Gear Up?</h2>

        <p className="mt-5 mb-8">
          Browse thousands of premium sports equipment today.
        </p>

        <Button
          className="bg-primary font-bold text-shadow-white"
          asChild
          size="lg"
        >
          <Link href="/products">Start Renting</Link>
        </Button>
      </motion.div>
    </section>
  );
}
