"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/gearUpBanner.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-lime-500 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-green-400 blur-3xl"
      />

      
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-lime-400/40 bg-lime-500/10 px-4 py-1 text-sm text-lime-400"
          >
            About GearUp
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Your Adventure
            <br />
            Starts With
            <span className="text-lime-400"> GearUp.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-gray-300"
          >
            GearUp makes premium sports and outdoor equipment accessible through
            affordable rentals. Whether you are hiking, camping, cycling, or
            training, we have got the right gear for your next adventure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-sm  hover:font-bold text-black hover:bg-lime-400"
            >
              <Link href="/products">Explore Gear</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-sm  hover:font-bold text-black hover:bg-lime-400"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
