import { Check } from "lucide-react";

const audiences = [
  "Dental clinics",
  "Medical and wellness practices",
  "Med spas and aesthetics clinics",
  "Small multi-provider clinics",
  "Growing practices with lean admin teams",
];

const WhoItsForSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Built for clinics that need a stronger front desk
      </h2>
      <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
        Frontdesk fits clinics where calls drive bookings and staff lose time to repetitive scheduling work. It works well for dental clinics, aesthetics clinics, wellness practices, general clinics, and small multi-provider teams.
      </p>
      <div className="inline-flex flex-col items-start gap-3">
        {audiences.map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-teal" />
            </div>
            <span className="text-foreground">{a}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsForSection;
