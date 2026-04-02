import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    label: "Starter",
    tagline: "For solo and small clinics getting started with AI front desk automation.",
    features: ["AI voice receptionist", "Booking and reminders", "Basic clinic setup"],
    highlighted: false,
  },
  {
    label: "Growth",
    tagline: "For clinics ready to add patient self-service and stronger front-desk workflow.",
    features: ["AI voice receptionist", "Booking and reminders", "Patient portal", "Priority support"],
    highlighted: true,
  },
  {
    label: "Premium",
    tagline: "For busy or multi-location clinics that need a fuller setup and customization.",
    features: ["AI voice receptionist", "Booking and reminders", "Patient portal", "Multi-location support", "Priority support", "Custom workflow setup"],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Simple plans for different clinic sizes
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the setup that fits how your front desk runs today.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 border ${
              plan.highlighted
                ? "bg-navy border-teal/30 shadow-xl shadow-teal/10 relative"
                : "bg-card border-border shadow-sm"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            )}
            <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-hero-foreground" : "text-foreground"}`}>
              {plan.label}
            </h3>
            <p className={`text-sm mb-6 leading-relaxed ${plan.highlighted ? "text-hero-muted" : "text-muted-foreground"}`}>
              {plan.tagline}
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-hero-foreground" : "text-foreground"}`}>
                  <Check className="w-4 h-4 text-teal flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? "hero" : "outline"}
              className="w-full"
            >
              Book a Demo
            </Button>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
        Pricing depends on clinic size, workflow complexity, and call volume. Book a demo to get the right setup for your practice.
      </p>
    </div>
  </section>
);

export default PricingSection;
