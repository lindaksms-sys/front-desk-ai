import { Search, Upload, PhoneOff } from "lucide-react";

const bullets = [
  { icon: Search, text: "Patients find booked appointments by phone number." },
  { icon: Upload, text: "New patients upload intake forms before the visit." },
  { icon: PhoneOff, text: "Your team handles fewer repetitive \"quick question\" calls." },
];

const PatientPortalSection = () => (
  <section className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Give patients a self-service option
          </h2>
          <p className="text-lg text-muted-foreground mb-3">
            Reduce phone tag with a simple patient portal.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Patients should not need to call your clinic for every small task. Frontdesk gives them a clean place to find appointments, upload intake forms, and handle simple follow-up steps before they arrive.
          </p>
          <div className="space-y-4">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-4 h-4 text-teal" />
                </div>
                <p className="text-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mock portal UI */}
        <div className="bg-card rounded-2xl border border-border shadow-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Find Your Appointment</h3>
          <div className="bg-secondary rounded-lg p-3 mb-4">
            <p className="text-sm text-muted-foreground">Phone number</p>
            <p className="text-foreground font-mono">+1 (555) 123-4567</p>
          </div>
          <div className="border border-border rounded-xl p-4 mb-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-medium text-foreground">Dental Cleaning</p>
                <p className="text-sm text-muted-foreground">Dr. Miller</p>
              </div>
              <span className="text-xs bg-teal-light text-teal px-2 py-1 rounded-full font-medium">Confirmed</span>
            </div>
            <p className="text-sm text-muted-foreground">Tue, Jan 14 — 9:00 AM</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-medium text-foreground">Consultation</p>
                <p className="text-sm text-muted-foreground">Dr. Chen</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "hsl(var(--warning-light))", color: "hsl(var(--warning-foreground))" }}>Pending</span>
            </div>
            <p className="text-sm text-muted-foreground">Wed, Jan 22 — 10:30 AM</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PatientPortalSection;
