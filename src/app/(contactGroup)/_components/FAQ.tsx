"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="container w-10/12 mx-auto py-20">
      <h2 className="mb-10 text-center text-5xl font-bold">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger className="text-3xl">
            How do rentals work?
          </AccordionTrigger>

          <AccordionContent className="text-2xl">
            Choose your gear, select rental dates, confirm your booking, and
            enjoy your adventure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger className="text-3xl">
            Can I cancel my booking?
          </AccordionTrigger>

          <AccordionContent className="text-2xl">
            Yes, bookings can be cancelled according to our cancellation policy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
