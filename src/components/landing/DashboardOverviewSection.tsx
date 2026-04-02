import { CalendarDays, PhoneCall, Bell, Clock, LayoutGrid, Calendar, Phone, Timer } from "lucide-react";

const bullets = [
  { icon: CalendarDays, text: "Today's snapshot: appointments, calls, and reminders in one place." },
  { icon: PhoneCall, text: "Recent calls: see what was booked, changed, or left as inquiry only." },
  { icon: Bell, text: "Faster staff decisions: no guessing, no switching between tools." },
];

const stats = [
  { icon: Calendar, label: "Today's Appointments", value: "0", color: "text-teal" },
  { icon: Phone, label: "Calls Today", value: "4", color: "text-success-light" },
  { icon: Timer, label: "Upcoming", value: "3", color: "text-warning-foreground" },
  { icon: Bell, label: "Reminders Pending", value: "3", color: "text-warning-foreground" },
];

const appointments = [
  { name: "Sarah Miller", type: "general", phone: "+15551234567", date: "2026-04-05", time: "09:00:00" },
  { name: "Jane Doe", type: "cleaning", phone: "+27123456789", date: "2026-04-05", time: "10:00:00" },
  { name: "Linda Moyo", type: "dental_cleaning", phone: "0773654789", date: "2026-04-05", time: "11:30:00" },
];

const calls = [
  {
    name: "Linda Moyo",
    badge: "inquiry_only",
    badgeColor: "bg-teal/10 text-teal",
    summary: "Caller asked about weekend availability for dental cleaning. No suitable slot selected; patient will call back.",
  },
  {
    name: "Sarah Miller",
    badge: "booked",
    badgeColor: "bg-success-light/10 text-success-light",
    summary: "Booked a general appointment for Sarah Miller on April 5, 2026 at 9:00 AM during an after-hours call.",
  },
];

const sidebarItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: Calendar, label: "Appointments", active: false },
  { icon: Phone, label: "Call Logs", active: false },
  { icon: Timer, label: "Availability", active: false },
];

const DashboardOverviewSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          See Frontdesk in a live demo clinic
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore the demo clinic dashboard and patient portal to see how AI-handled calls turn into real appointments and reminders.
        </p>
      </div>

      {/* Mock dashboard screenshot */}
      <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden mb-8">
        {/* Browser chrome */}
        <div className="bg-navy p-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--warning) / 0.6)" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--success-light) / 0.6)" }} />
          </div>
          <span className="text-xs text-hero-muted ml-2">Austin Clinic Dashboard</span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-52 bg-navy text-white p-4 min-h-[420px] justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold">FD</div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Austin Clinic</p>
                  <p className="text-[10px] text-hero-muted">Demo account for Frontdesk</p>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-hero-muted mb-2">Menu</p>
              <nav className="space-y-1">
                {sidebarItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${item.active ? "bg-teal/20 text-teal font-medium" : "text-hero-muted hover:text-white"}`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2 text-hero-muted text-xs cursor-pointer">
              <span>→</span> Sign Out
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 md:p-8 bg-secondary/30">
            <h3 className="text-lg font-bold text-foreground">Dashboard Overview</h3>
            <p className="text-xs text-muted-foreground mb-5">Welcome to your AI-powered front desk</p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {stats.map((s, i) => (
                <div key={i} className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg border border-border flex items-center justify-center ${s.color}`}>
                    <s.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground leading-tight">{s.value}</p>
                    <p className="text-[10px] text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-5">
              <span className="text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-full">Overview</span>
              <span className="text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border flex items-center gap-1">
                <Bell className="w-3 h-3" /> Reminders
              </span>
            </div>

            {/* Two columns */}
            <div className="grid md:grid-cols-5 gap-4">
              {/* Appointments */}
              <div className="md:col-span-3 bg-card rounded-xl border border-border p-4">
                <h4 className="font-semibold text-sm text-foreground mb-3">Upcoming Appointments</h4>
                <div className="space-y-3">
                  {appointments.map((a, i) => (
                    <div key={i} className="flex justify-between items-start border-l-2 border-border pl-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{a.name}</p>
                        <p className="text-[11px] text-muted-foreground">{a.type} • {a.phone}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{a.date}</p>
                        <p className="text-[11px] text-muted-foreground">{a.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Calls */}
              <div className="md:col-span-2 bg-card rounded-xl border border-border p-4">
                <h4 className="font-semibold text-sm text-foreground mb-3">Recent Calls</h4>
                <div className="space-y-3">
                  {calls.map((c, i) => (
                    <div key={i} className="border-l-2 border-border pl-3">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-medium text-foreground">{c.name}</p>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${c.badgeColor}`}>{c.badge}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{c.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
