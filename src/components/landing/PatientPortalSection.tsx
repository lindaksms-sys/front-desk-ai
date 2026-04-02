import { Search, Upload, PhoneOff, Phone, FileText } from "lucide-react";

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

        {/* Mock portal UI matching reference */}
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Portal header */}
          <div className="bg-navy px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center text-white text-[10px] font-bold">FD</div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Austin Clinic</p>
                <p className="text-[9px] text-hero-muted">Demo Patient Portal for Frontdesk</p>
              </div>
            </div>
            <span className="text-[10px] text-hero-muted">Clinic Staff Login</span>
          </div>

          <div className="p-5 md:p-6">
            {/* Welcome heading */}
            <div className="text-center mb-5">
              <h3 className="text-lg font-bold text-foreground mb-1">Welcome to Your Patient Portal</h3>
              <p className="text-xs text-muted-foreground">View your appointments, cancel if needed, and upload intake forms — all in one place.</p>
              <p className="text-[10px] text-muted-foreground/60 mt-1">Appointments and documents shown here are sample data.</p>
            </div>

            {/* Find My Appointments */}
            <div className="border border-border rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-teal" />
                <h4 className="font-semibold text-sm text-foreground">Find My Appointments</h4>
              </div>
              <p className="text-[11px] text-teal mb-3">Enter the phone number you used when booking</p>
              <div className="flex gap-2">
                <div className="flex-1 border border-border rounded-lg px-3 py-2">
                  <p className="text-xs text-muted-foreground">e.g. +1 (555) 123-4567</p>
                </div>
                <div className="bg-teal text-white text-xs font-medium px-4 py-2 rounded-lg flex items-center gap-1.5 whitespace-nowrap">
                  <Search className="w-3 h-3" />
                  Find My Appointments
                </div>
              </div>
            </div>

            {/* Upload Intake Form */}
            <div className="border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-teal" />
                <h4 className="font-semibold text-sm text-foreground">Upload Intake Form</h4>
              </div>
              <p className="text-[11px] text-muted-foreground mb-3">New patient? Upload your completed intake form before your visit to save time.</p>

              <p className="text-xs font-medium text-foreground mb-1">Your Phone Number</p>
              <div className="border border-border rounded-lg px-3 py-2 mb-3">
                <p className="text-xs text-muted-foreground">e.g. +15551234567</p>
              </div>

              <p className="text-xs font-medium text-foreground mb-1">Select Document</p>
              <div className="border border-border rounded-lg px-3 py-2 mb-1">
                <p className="text-xs text-muted-foreground">Choose File &nbsp; No file chosen</p>
              </div>
              <p className="text-[10px] text-muted-foreground mb-3">PDF, JPG, PNG, or Word documents accepted</p>

              <div className="bg-teal text-white text-xs font-medium px-4 py-2 rounded-lg inline-flex items-center gap-1.5">
                <Upload className="w-3 h-3" />
                Upload Form
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PatientPortalSection;
