"use client";
import { motion } from "framer-motion";
import { Rocket, Package, Users, MapPin, Check } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "GearUp Started",
    description:
      "GearUp began with a simple goal — making sports and outdoor equipment easier to rent and more accessible.",
    icon: Rocket,
  },
  {
    year: "2025",
    title: "100+ Rental Products",
    description:
      "Our collection expanded with a wide range of sports and outdoor equipment for different activities and adventures.",
    icon: Package,
  },
  {
    year: "2026",
    title: "1,000+ Customers",
    description:
      "More than 1,000 customers have used GearUp to find quality equipment for their sports and outdoor experiences.",
    icon: Users,
  },
  {
    year: "Now",
    title: "Growing Nationwide",
    description:
      "We are working to make GearUp accessible to more customers across Bangladesh with a simple and reliable rental experience.",
    icon: MapPin,
  },
];

export default function Timeline() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-32">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {" "}
          <span className="mb-4 inline-block rounded-full border bg-background sm:text-4xl lg:text-5xl px-4 py-2 text-sm font-medium">
            {" "}
            Our Story{" "}
          </span>{" "}
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            {" "}
            A look at the milestones that have shaped GearUp and our journey
            toward making equipment rental easier.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Timeline */}{" "}
        <div className="relative mx-auto max-w-5xl">
          {" "}
          {/* Vertical Line */}{" "}
          <div className="absolute left-5 top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-1/2" />{" "}
          <div className="space-y-10 sm:space-y-14 lg:space-y-20">
            {" "}
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative lg:min-h-45"
                >
                  {" "}
                  {/* Timeline Circle */}{" "}
                  <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary shadow-md lg:left-1/2">
                    {" "}
                    <Check className="h-4 w-4 text-primary-foreground" />{" "}
                  </div>{" "}
                  {/* Content */}{" "}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${isEven ? "lg:pr-16" : "lg:ml-auto lg:pl-16"}`}
                  >
                    {" "}
                    <div className="group rounded-2xl border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      {" "}
                      {/* Top */}{" "}
                      <div className="mb-5 flex items-center justify-between">
                        {" "}
                        <span className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                          {" "}
                          {item.year}{" "}
                        </span>{" "}
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-transform duration-300 group-hover:scale-110">
                          {" "}
                          <Icon className="h-5 w-5" />{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* Title */}{" "}
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {" "}
                        {item.title}{" "}
                      </h3>{" "}
                      {/* Description */}{" "}
                      <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {" "}
                        {item.description}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </motion.div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}