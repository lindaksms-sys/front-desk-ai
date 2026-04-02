import { Phone, CalendarCheck, Send, RefreshCw, Eye } from "lucide-react";

const steps = [
  { icon: Phone, title: "Patient calls", body: "Your AI front desk answers instantly, day or night." },
  { icon: CalendarCheck, title: "Books or reschedules", body: "The system handles booking, rescheduling, and cancellations through natural conversation." },
  { icon: Send, title: "Confirmation is sent", body: "Patients receive confirmation and reminder messages automatically through your workflow." },
  { icon: RefreshCw, title: "Portal stays in sync", body: "Patients find their booking details and complete simple tasks without calling the clinic again." },
  { icon: Eye, title: "Staff see everything", body: "Your dashboard updates with appointments, call logs, reminder status, and availability in one place." },
];

const HowItWorksSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-sm font-medium text-teal uppercase tracking-wider">How it works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
          From call to confirmed appointment in minutes
        </h2>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />
        <div className="space-y-10">
          {steps.map((step, i) => (
            <div key={i} className={`relative flex items-start gap-6 sm:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center shadow-lg shadow-teal/20">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 pb-2">
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
