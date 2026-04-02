import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do patients still speak to a real person if needed?", a: "Yes. Frontdesk handles repetitive front-desk workflows and gives your team better visibility, but your staff stays in control of exceptions and follow-up." },
  { q: "Does this replace my current front desk team?", a: "No. It removes repetitive call handling so your team spends more time on patients and less time repeating the same tasks." },
  { q: "What does the patient portal do?", a: "Patients use it to find appointments, complete simple tasks, and upload intake forms before the visit." },
  { q: "What does the dashboard show?", a: "It shows appointments, call outcomes, reminder status, and real-time availability from one place." },
  { q: "How long does setup take?", a: "Setup depends on your workflow. The goal is to get clinics live quickly with a focused first version and a clear rollout plan." },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-foreground text-left font-medium hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
