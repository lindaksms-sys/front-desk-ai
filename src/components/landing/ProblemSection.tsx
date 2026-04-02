import { PhoneOff, RefreshCw, Search, BarChart3 } from "lucide-react";

const bullets = [
  { icon: PhoneOff, text: "Calls come in after hours and no one answers." },
  { icon: RefreshCw, text: "Staff repeat the same booking and reminder tasks all day." },
  { icon: Search, text: "Patients need a simple way to confirm, cancel, or find appointments." },
  { icon: BarChart3, text: "Managers lack one clear view of calls, appointments, and reminders." },
];

const ProblemSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
        Your front desk should not be your bottleneck
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Missed calls turn into missed revenue. Reschedules eat staff time. Reminder follow-up gets inconsistent. Patients wait on hold for simple tasks your clinic should not need a human to handle every time.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
              <b.icon className="w-5 h-5 text-teal" />
            </div>
            <p className="text-foreground leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
