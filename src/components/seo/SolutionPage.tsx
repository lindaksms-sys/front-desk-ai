import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import FooterSection from "@/components/landing/FooterSection";

export interface SolutionPageProps {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  sections: { h2: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const SITE = "https://smartdesk-harmony.lovable.app";

const SolutionPage = ({
  slug,
  title,
  metaDescription,
  h1,
  intro,
  bullets,
  sections,
  faqs,
}: SolutionPageProps) => {
  const url = `${SITE}/${slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: h1, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main>
        <section className="hero-gradient section-padding pt-24">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-hero-muted hover:text-teal mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
              {h1}
            </h1>
            <p className="text-lg md:text-xl text-hero-muted leading-relaxed mb-8">
              {intro}
            </p>
            <a
              href="https://calendar.app.google/bUrF5vgq4YGQyD1A7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Book a Demo
              </Button>
            </a>
          </div>
        </section>

        <section className="section-padding section-alt">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What you get
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-sm border border-border"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center">
                    <Check className="w-4 h-4 text-teal" />
                  </div>
                  <p className="text-foreground leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {sections.map((s, i) => (
          <section
            key={i}
            className={`section-padding ${i % 2 === 1 ? "section-alt" : ""}`}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {s.h2}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </div>
          </section>
        ))}

        <section className="section-padding section-alt">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm"
                >
                  <h3 className="text-foreground font-semibold mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See it on your own clinic
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a 20-minute demo and see how Frontdesk handles your real call flow.
            </p>
            <a
              href="https://calendar.app.google/bUrF5vgq4YGQyD1A7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Book a Demo
              </Button>
            </a>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
};

export default SolutionPage;
