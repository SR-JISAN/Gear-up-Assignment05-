"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import {motion} from "framer-motion"

const faqs = [
  {
    id: "item-1",
    question: "How do rentals work?",
    answer:
      "Choose the gear you need, select your preferred rental dates, review the rental details, and confirm your booking. Once your booking is confirmed, you can pick up the equipment from the selected location.",
  },
  {
    id: "item-2",
    question: "Can I cancel my booking?",
    answer:
      "Yes. You can cancel your booking according to our cancellation policy. Cancellation availability may depend on the current status of your rental order.",
  },
  {
    id: "item-3",
    question: "What happens if the gear is unavailable?",
    answer:
      "Our system checks product availability before confirming a rental. If the requested quantity is unavailable, you will need to choose a different quantity, product, or rental period.",
  },
  {
    id: "item-4",
    question: "How do I return the rented equipment?",
    answer:
      "Return the equipment to the designated return location within your selected rental period. Please make sure the gear is returned in the same condition in which you received it.",
  },
  {
    id: "item-5",
    question: "Is a security deposit required?",
    answer:
      "Security deposit requirements may vary depending on the product and rental conditions. Any applicable deposit or additional charges will be shown before you confirm your rental.",
  },
];


export default function FAQ() {
  return (
    <section className="bg-background">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Section Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          {" "}
          <span className="mb-4 inline-block rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium">
            {" "}
            FAQ{" "}
          </span>{" "}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {" "}
            Frequently Asked Questions{" "}
          </h2>{" "}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {" "}
            Find answers to the most common questions about renting sports and
            outdoor equipment with GearUp.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* FAQ Accordion */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          {" "}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {" "}
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl border bg-muted/20 px-5 transition-all duration-300 hover:bg-muted/40 sm:px-7"
              >
                {" "}
                <AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline sm:text-lg lg:text-xl">
                  {" "}
                  {faq.question}{" "}
                </AccordionTrigger>{" "}
                <AccordionContent className="pb-6 pr-4 text-sm leading-6 text-muted-foreground sm:pr-8 sm:text-base sm:leading-7">
                  {" "}
                  {faq.answer}{" "}
                </AccordionContent>{" "}
              </AccordionItem>
            ))}{" "}
          </Accordion>{" "}
        </motion.div>{" "}
        {/* Bottom CTA */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl text-center sm:mt-16"
        >
          {" "}
          <p className="text-sm text-muted-foreground sm:text-base">
            {" "}
            Still have questions?{" "}
            <span className="font-medium text-foreground">
              {" "}
              We&apos;re here to help.{" "}
            </span>{" "}
          </p>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
