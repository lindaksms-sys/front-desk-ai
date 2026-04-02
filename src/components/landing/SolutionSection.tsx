import { Phone, Users, LayoutDashboard } from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "AI voice receptionist",
    body: "Answers inbound calls, handles booking requests, reschedules visits, captures cancellations, and sends the right data into your workflow in real time.",
  },
  {
    icon: Users,
    title: "Patient portal",
    body: "Lets patients find appointments, manage simple requests, and upload intake forms without phone tag.",
  },
  {
    icon: LayoutDashboard,
    title: "Clinic dashboard",
    body: "Gives staff one place to track appointments, call outcomes, reminders, and live availability.",
  },
];

const SolutionSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          One front desk system, three connected parts
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Frontdesk brings together your AI voice receptionist, patient portal, and clinic dashboard in one workflow.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-5">
              <card.icon className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
