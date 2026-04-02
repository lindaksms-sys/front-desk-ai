import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import DashboardOverviewSection from "@/components/landing/DashboardOverviewSection";
import PatientPortalSection from "@/components/landing/PatientPortalSection";
import DashboardDetailSection from "@/components/landing/DashboardDetailSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WhoItsForSection from "@/components/landing/WhoItsForSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <main>
    <HeroSection />
    <ScrollReveal><ProblemSection /></ScrollReveal>
    <ScrollReveal><SolutionSection /></ScrollReveal>
    <ScrollReveal><HowItWorksSection /></ScrollReveal>
    <ScrollReveal><DashboardOverviewSection /></ScrollReveal>
    <ScrollReveal><PatientPortalSection /></ScrollReveal>
    <ScrollReveal><DashboardDetailSection /></ScrollReveal>
    <ScrollReveal><BenefitsSection /></ScrollReveal>
    <ScrollReveal><WhoItsForSection /></ScrollReveal>
    <ScrollReveal><PricingSection /></ScrollReveal>
    <ScrollReveal><FAQSection /></ScrollReveal>
    <ScrollReveal><FinalCTASection /></ScrollReveal>
    <ScrollReveal><FooterSection /></ScrollReveal>
  </main>
);
export default Index;
