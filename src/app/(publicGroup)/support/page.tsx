import {
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  ShieldCheck,
  Package,
  CreditCard,
  UserRound,
  ChevronRight,
} from "lucide-react";

const supportTopics = [
  {
    icon: Package,
    title: "Rental & Orders",
    description:
      "Get help with rental orders, delivery, returns, cancellations, and order status.",
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description:
      "Questions about payments, refunds, billing information, or payment issues.",
  },
  {
    icon: UserRound,
    title: "Account & Profile",
    description:
      "Manage your account, profile information, password, and account security.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description:
      "Learn about account security, rental safety, and protecting your personal information.",
  },
];

const faqs = [
  {
    question: "How can I track my rental order?",
    answer:
      "Go to your dashboard and open the Rentals section to check your current rental status.",
  },
  {
    question: "Can I cancel a rental order?",
    answer:
      "Cancellation depends on the current status of your rental order. Contact support if you need assistance.",
  },
  {
    question: "How do I return rented equipment?",
    answer:
      "Return the equipment according to the return date and instructions provided with your rental order.",
  },
  {
    question: "What should I do if I have a payment problem?",
    answer:
      "Check your payment information first. If the issue continues, contact our support team for assistance.",
  },
];

export default function SupportPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl bg-cyan-600 px-6 py-10 text-white shadow-sm md:px-10">
        <div className="max-w-3xl">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <HelpCircle className="h-7 w-7" />
          </div>

          <h1 className="text-3xl font-bold md:text-4xl">How can we help?</h1>

          <p className="mt-3 text-cyan-50">
            Find answers to common questions or contact our support team.
            We&apos;re here to help you get the most out of Gear Up.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-100">
            <MessageCircle className="h-5 w-5 text-cyan-600" />
          </div>

          <h2 className="font-semibold text-lg">Live Chat</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Chat with our support team for quick assistance with your questions.
          </p>

          <button className="mt-5 flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:underline">
            Start a conversation
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>

          <h2 className="font-semibold text-lg">Email Support</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Send us an email and our support team will get back to you.
          </p>

          <a
            href="mailto:support@gearup.com"
            className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
          >
            support@gearup.com
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-green-100">
            <Phone className="h-5 w-5 text-green-600" />
          </div>

          <h2 className="font-semibold text-lg">Phone Support</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Talk directly with our support team for urgent issues.
          </p>

          <a
            href="tel:+8801234567890"
            className="mt-5 flex items-center gap-1 text-sm font-semibold text-green-600 hover:underline"
          >
            +880 1234-567890
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Support Topics */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold">What can we help with?</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Choose a topic to find useful information.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {supportTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.title}
                className="group rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-cyan-100">
                    <Icon className="h-5 w-5 text-slate-600 group-hover:text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{topic.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Quick answers to some common questions.
          </p>
        </div>

        <div className="divide-y">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
              <h3 className="font-semibold">{faq.question}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Hours */}
      <div className="flex items-start gap-4 rounded-xl border bg-slate-50 p-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
          <Clock className="h-5 w-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="font-semibold">Support Hours</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Our support team is available Saturday - Thursday, 9:00 AM - 8:00
            PM.
          </p>

          <p className="mt-2 text-xs text-muted-foreground">Friday: Closed</p>
        </div>
      </div>
    </div>
  );
}
