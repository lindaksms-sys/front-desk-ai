import SolutionPage from "@/components/seo/SolutionPage";

const AutomatedAppointmentReminders = () => (
  <SolutionPage
    slug="automated-appointment-reminders"
    title="Automated Appointment Reminders for Clinics | SMS, Email & Voice"
    metaDescription="Automated appointment reminders by SMS, email, and voice. Cut no-shows, confirm visits, and let patients reschedule themselves. Built for dental, medical, and med spa clinics."
    h1="Automated appointment reminders that actually reduce no-shows"
    intro="Frontdesk sends multi-channel automated appointment reminders — SMS, email, and voice — at the moments most likely to get a confirmation. Patients can reply to confirm, cancel, or reschedule without calling your front desk."
    bullets={[
      "SMS, email, and voice reminders in one system",
      "Smart timing: 7-day, 48-hour, and morning-of nudges",
      "One-tap confirm, cancel, or reschedule",
      "Bilingual English and Spanish messaging",
      "Custom templates per appointment type",
      "Two-way SMS replies routed to the right place",
      "Recall and reactivation campaigns built in",
      "Dashboard showing confirmations and no-show rate over time",
    ]}
    sections={[
      {
        h2: "Why most reminder systems still leave money on the table",
        body: "Most clinics already send a reminder. The problem is that it is one message, at one time, on one channel — and patients ignore it. Frontdesk uses a multi-touch, multi-channel sequence tuned by appointment type, so the right patient gets the right nudge at the right moment.",
      },
      {
        h2: "Patients reschedule themselves instead of ghosting",
        body: "When a patient cannot make it, the easy option is to not show up. Frontdesk gives them a one-tap link to pick a new slot from your live availability. The cancelled slot is offered to your waitlist automatically.",
      },
      {
        h2: "Reactivate patients you have not seen in months",
        body: "Recall and reactivation use the same engine. Frontdesk identifies patients overdue for a cleaning, follow-up, or treatment and brings them back with a personalized message — not a generic blast.",
      },
    ]}
    faqs={[
      {
        q: "Will this work with our practice management software?",
        a: "Yes. Frontdesk integrates with most modern PMS and EHR systems, including Dentrix, Open Dental, Eaglesoft, Boulevard, and others. Reminders pull from your live schedule.",
      },
      {
        q: "Can patients reply to the SMS?",
        a: "Yes. Two-way SMS is built in. Replies like CONFIRM, CANCEL, or a question are routed to the right person or handled by the AI automatically.",
      },
      {
        q: "How much do no-shows actually drop?",
        a: "Most clinics see a 30 to 60 percent reduction in no-shows in the first 60 days, depending on starting baseline and patient mix.",
      },
      {
        q: "Can we customize the message wording?",
        a: "Yes. Every template is editable per appointment type, language, and channel.",
      },
    ]}
  />
);

export default AutomatedAppointmentReminders;
