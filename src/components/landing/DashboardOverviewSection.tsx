import { CalendarDays, PhoneCall, Bell } from "lucide-react";

const bullets = [
  { icon: CalendarDays, text: "Today's snapshot: appointments, calls, and reminders in one place." },
  { icon: PhoneCall, text: "Recent calls: see what was booked, changed, or left as inquiry only." },
  { icon: Bell, text: "Faster staff decisions: no guessing, no switching between tools." },
];

const DashboardOverviewSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          One screen for today's front desk
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          See appointments, calls, reminders, and upcoming activity at a glance.
        </p>
      </div>

      {/* Mock dashboard screenshot */}
      <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-8">
        <div className="bg-navy p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--warning) / 0.6)" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--success-light) / 0.6)" }} />
          </div>
          <span className="text-xs text-hero-muted ml-2">Frontdesk — Overview</span>
        </div>
        <div className="p-6 md:p-10 bg-secondary/30">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[{ label: "Today's Appointments", value: "14" }, { label: "Calls Handled", value: "23" }, { label: "Reminders Sent", value: "18" }].map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-4 border border-border text-center">
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {["Dr. Miller — Cleaning — 9:00 AM — Confirmed", "Dr. Chen — Consult — 10:30 AM — Pending", "Dr. Miller — Follow-up — 2:00 PM — Confirmed"].map((row, i) => (
              <div key={i} className="bg-card rounded-lg p-3 border border-border text-sm text-muted-foreground flex justify-between">
                <span>{row}</span>
                <span className={i === 1 ? "text-yellow-600 font-medium" : "text-teal font-medium"}>{i === 1 ? "Pending" : "Confirmed"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mb-10">
        Example dashboard view with demo data for a clinic account.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <b.icon className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
            <p className="text-foreground text-sm leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DashboardOverviewSection;
