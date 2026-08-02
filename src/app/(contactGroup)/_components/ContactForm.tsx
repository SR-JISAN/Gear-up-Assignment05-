"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl rounded-2xl border bg-background p-10"
      >
        <h2 className="mb-8 text-center text-4xl font-bold">Send Message</h2>

        <form className="space-y-6">
          <Input placeholder="Your Name" />

          <Input type="email" placeholder="Email Address" />

          <Input placeholder="Subject" />

          <Textarea rows={6} placeholder="Write your message..." />

          <Button className="w-full bg-lime-500 hover:bg-lime-600">
            Send Message
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
