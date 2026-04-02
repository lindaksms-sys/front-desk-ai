import { CalendarCheck, PhoneCall, Clock } from "lucide-react";

const cards = [
  {
    icon: CalendarCheck,
    title: "Appointments",
    body: "See booked appointments by patient, service, date, time, and status in one filtered list.",
  },
  {
    icon: PhoneCall,
    title: "Call logs",
    body: "Review every AI-handled call with outcome labels and plain-language summaries.",
  },
  {
    icon: Clock,
    title: "Availability",
    body: "Set and adjust open slots so the voice agent offers only valid appointment times.",
  },
];

const DashboardDetailSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Keep your team in control
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Your AI handles the calls. Your staff stays on top of the clinic.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-14 h-14 rounded-2xl bg-navy mx-auto mb-5 flex items-center justify-center">
              <card.icon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DashboardDetailSection;
