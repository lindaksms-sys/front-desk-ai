import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="section-padding hero-gradient">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-6">
        Ready to modernize your clinic front desk?
      </h2>
      <p className="text-hero-muted text-lg mb-10 leading-relaxed">
        Book a demo to see how your AI voice receptionist, patient portal, and clinic dashboard work together in one system.
      </p>
      <a href="https://calendly.com/leekissy18/frontdesk-demo" target="_blank" rel="noopener noreferrer">
        <Button variant="hero" size="lg" className="text-base px-10 py-6 mb-4">
          Book a Demo
        </Button>
      </a>
      <p className="text-sm text-hero-muted/60">
        See the live flow, ask questions, and get a setup plan for your clinic.
      </p>
    </div>
  </section>
);

export default FinalCTASection;
