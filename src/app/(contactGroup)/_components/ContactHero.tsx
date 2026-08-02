"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-black via-slate-900 to-black py-28">
      <div className="absolute inset-0 bg-[url('/images/contact-banner.jpg')] bg-cover bg-center opacity-20" />

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Contact <span className="text-lime-400">GearUp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-gray-300"
        >
          We had love to hear from you. Reach out with any questions, rental
          inquiries, or partnership opportunities.
        </motion.p>
      </div>
    </section>
  );
}
