import SolutionPage from "@/components/seo/SolutionPage";

const DentalAnsweringService = () => (
  <SolutionPage
    slug="dental-answering-service"
    title="Dental Answering Service | 24/7 AI Front Desk for Dental Offices"
    metaDescription="An AI-powered dental answering service that picks up missed calls, books appointments, and handles after-hours patient questions. No extra staff required."
    h1="A 24/7 dental answering service that books appointments, not just messages"
    intro="Frontdesk replaces the traditional dental answering service with an AI front desk that answers every call, schedules new patients, handles reschedules, and confirms appointments — day, night, and weekends."
    bullets={[
      "24/7 call answering with natural-sounding AI",
      "Books new and returning patients directly into your schedule",
      "Handles cancellations, reschedules, and confirmations",
      "After-hours coverage with no voicemail tag",
      "Bilingual English and Spanish support",
      "Live dashboard of every call and booking",
      "HIPAA-aware call handling and storage",
      "Connects to your existing practice management software",
    ]}
    sections={[
      {
        h2: "Why dental practices are replacing legacy answering services",
        body: "Traditional dental answering services take messages. Patients calling at 7pm to book a cleaning hang up and call the next clinic. Frontdesk answers the call live, looks at your real schedule, and books the appointment in under two minutes.\n\nThe result: more new patients, fewer no-shows, and a front desk team that finally has time for the patients in the chair.",
      },
      {
        h2: "What happens on every call",
        body: "Frontdesk greets the caller in your clinic's voice, asks who is calling and why, and routes the conversation. New patient? It collects insurance and books an exam. Existing patient? It pulls their record and offers the next available slot. Emergency? It escalates to the on-call dentist by text.",
      },
      {
        h2: "Built for dental offices specifically",
        body: "Unlike a generic call center, Frontdesk understands dental scheduling rules: hygiene blocks, doctor columns, op assignments, recall intervals, and insurance verification. It works alongside Dentrix, Open Dental, Eaglesoft, and most modern PMS platforms.",
      },
    ]}
    faqs={[
      {
        q: "How is this different from a traditional dental answering service?",
        a: "A traditional service takes messages your team has to follow up on the next morning. Frontdesk actually books the appointment on the call, so no callbacks and no lost patients.",
      },
      {
        q: "Will it sound like a robot to my patients?",
        a: "No. The AI uses natural conversation with your clinic's tone and name. Most patients do not realize they are not talking to a person until they read the confirmation text.",
      },
      {
        q: "Does it work after hours and on weekends?",
        a: "Yes. Frontdesk runs 24/7, including evenings, weekends, and holidays. After-hours bookings show up in your schedule the moment your team logs in.",
      },
      {
        q: "What does it cost compared to a live answering service?",
        a: "Most clinics pay 30 to 60 percent less than a traditional dental answering service while booking more appointments. We size pricing to your call volume.",
      },
    ]}
  />
);

export default DentalAnsweringService;
