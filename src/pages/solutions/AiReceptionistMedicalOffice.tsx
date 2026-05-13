import SolutionPage from "@/components/seo/SolutionPage";

const AiReceptionistMedicalOffice = () => (
  <SolutionPage
    slug="ai-receptionist-for-medical-office"
    title="AI Receptionist for Medical Offices | 24/7 Call Handling & Booking"
    metaDescription="An AI receptionist for medical offices that answers calls, books patients, handles reschedules, and sends reminders 24/7. HIPAA-aware and built for clinics."
    h1="An AI receptionist for medical offices that never misses a call"
    intro="Frontdesk gives small and mid-size medical offices an always-on AI receptionist. Every call is answered, every patient is booked, and your front desk team finally gets time back for the patients in the waiting room."
    bullets={[
      "24/7 AI receptionist for medical and wellness practices",
      "Books new and returning patients into your schedule",
      "Handles intake questions, insurance, and routing",
      "HIPAA-aware call handling and storage",
      "Bilingual English and Spanish support",
      "Escalates urgent calls to on-call providers instantly",
      "Live dashboard of calls, bookings, and reminders",
      "Works alongside your existing EHR or PMS",
    ]}
    sections={[
      {
        h2: "Why medical offices are switching to an AI receptionist",
        body: "Hiring and retaining front desk staff is harder than ever. An AI receptionist for your medical office picks up every call instantly, follows your scripts perfectly, and never calls in sick. Your in-house team stays focused on the patients in front of them, not the phone.",
      },
      {
        h2: "Designed for clinic workflows, not generic call centers",
        body: "Frontdesk understands provider columns, visit types, prep requirements, insurance rules, and triage. It books a sick visit differently than a physical, and routes a chest-pain call differently than a refill request.",
      },
      {
        h2: "Built with patient privacy in mind",
        body: "Calls and patient data are handled with HIPAA-aware controls: encryption in transit and at rest, scoped access for your team, audit logs, and a Business Associate Agreement available on request.",
      },
    ]}
    faqs={[
      {
        q: "Is this HIPAA compliant?",
        a: "Frontdesk is built with HIPAA-aware controls and we sign a Business Associate Agreement (BAA) with covered clinics on request.",
      },
      {
        q: "Can the AI receptionist transfer to a human?",
        a: "Yes. You set the rules. Urgent clinical calls, complex billing questions, or anything outside the AI's scope can be transferred or escalated by SMS to the right person.",
      },
      {
        q: "How long does setup take for a medical office?",
        a: "Most practices are live within one to two weeks. We configure your visit types, providers, scripts, and escalation rules, then test with real call flows before launch.",
      },
      {
        q: "Does it work for specialty clinics?",
        a: "Yes. We support primary care, dermatology, dental, med spa, mental health, physical therapy, and most outpatient specialties.",
      },
    ]}
  />
);

export default AiReceptionistMedicalOffice;
