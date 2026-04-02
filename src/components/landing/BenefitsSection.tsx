import { PhoneIncoming, UserMinus, Zap, Eye } from "lucide-react";

const benefits = [
  { icon: PhoneIncoming, title: "Fewer missed calls", body: "Capture inbound demand after hours, during lunch, or when staff is busy with patients." },
  { icon: UserMinus, title: "Less front-desk admin", body: "Take repetitive booking and reminder tasks off your team's plate so they focus on in-clinic work." },
  { icon: Zap, title: "Faster booking flow", body: "Move patients from inquiry to scheduled visit without delays, hold times, or back-and-forth." },
  { icon: Eye, title: "Clear visibility", body: "Know what happened on every call, which appointments were created, and what still needs attention." },
];

const BenefitsSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
        What your clinic gets
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
              <b.icon className="w-6 h-6 text-teal" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
