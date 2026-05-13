import SolutionPage from "@/components/seo/SolutionPage";

const MedicalSpaSoftware = () => (
  <SolutionPage
    slug="medical-spa-software"
    title="Medical Spa Software | AI Booking & Front Desk for Med Spas"
    metaDescription="Medical spa software with AI booking, automated reminders, and a 24/7 virtual receptionist. Built for med spas, aesthetics clinics, and wellness practices."
    h1="Medical spa software that books treatments while your team treats clients"
    intro="Frontdesk is the front-desk layer your medical spa software is missing. An AI receptionist answers every call, books consultations and treatments, sends reminders, and gives your team one live view of the day."
    bullets={[
      "AI receptionist that books Botox, filler, laser, and consult slots",
      "Automated SMS and email reminders that cut no-shows",
      "Online self-booking for returning clients",
      "Provider, room, and equipment-aware scheduling",
      "Deposit and card-on-file capture before booking",
      "Live dashboard for owners and managers",
      "Works alongside Boulevard, Mangomint, AestheticsPro, and Aesthetic Record",
      "Bilingual English and Spanish call handling",
    ]}
    sections={[
      {
        h2: "Built specifically for med spas and aesthetics clinics",
        body: "Generic salon software treats every appointment the same. Medical spas need provider-specific rules, treatment durations, room and laser conflicts, and consult-to-treatment funnels. Frontdesk understands all of this and books accordingly.",
      },
      {
        h2: "Stop losing booked revenue to no-shows",
        body: "Med spa no-show rates can run 15 to 25 percent. Frontdesk sends automated multi-touch reminders, captures deposits before booking high-ticket treatments, and lets clients reschedule themselves instead of ghosting. Most clinics see no-shows drop in the first month.",
      },
      {
        h2: "Capture every after-hours inquiry",
        body: "Most aesthetic decisions happen at night, on Instagram. Your client sees a Botox post at 10pm and calls. If no one picks up, they book with the next clinic. Frontdesk answers, books, and confirms — all before your team is back in the morning.",
      },
    ]}
    faqs={[
      {
        q: "Does this replace my existing medical spa software?",
        a: "No. Frontdesk sits on top of platforms like Boulevard, Mangomint, AestheticsPro, and Aesthetic Record. It handles calls and bookings; your existing system continues to handle charting, inventory, and POS.",
      },
      {
        q: "Can it take deposits before booking?",
        a: "Yes. For high-ticket treatments you can require a card on file or a deposit before the booking is confirmed.",
      },
      {
        q: "How fast can we go live?",
        a: "Most med spas are live in under a week. We map your services, providers, rooms, and rules, then test with real call flows before launch.",
      },
      {
        q: "Will it handle consults and treatment bookings differently?",
        a: "Yes. Consults, packages, and individual treatments all have their own duration, provider, and prep rules. Frontdesk respects each one.",
      },
    ]}
  />
);

export default MedicalSpaSoftware;
