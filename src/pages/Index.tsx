import { Github, ExternalLink } from 'lucide-react';
import MarkdownSection from '@/components/MarkdownSection';
import heroLogo from '@/assets/hero-logo.png';

import aboutContent from '@/content/about.md?raw';
import datasetContent from '@/content/dataset.md?raw';
import tasksContent from '@/content/tasks.md?raw';
import submissionContent from '@/content/submission.md?raw';
import timelineContent from '@/content/timeline.md?raw';
import organizersContent from '@/content/organizers.md?raw';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Challenge Description', href: '#description' },
  { label: 'Submission', href: '#submission' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const PARTNERS = [
  { name: 'SoBigData', url: 'https://www.sobigdata.eu' },
  { name: 'GreenDIGIT', url: '#' },
  { name: 'EGI Foundation', url: 'https://www.egi.eu' },
  { name: 'University of Amsterdam', url: 'https://www.uva.nl' },
  { name: 'University of Thessaly', url: 'https://www.uth.gr' },
];

const SectionWrapper = ({
  id,
  title,
  children,
  alt = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section id={id} className={`py-16 ${alt ? 'section-alt' : ''}`}>
    <div className="container max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-foreground">{title}</h2>
      {children}
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky nav */}
      <nav className="hero-gradient sticky top-0 z-50 border-b border-primary/20">
        <div className="container max-w-5xl mx-auto px-6 flex items-center justify-center gap-6 py-3 flex-wrap">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-gradient py-20 text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            ECML-PKDD 2026 — GreenDIGIT Challenge
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-8">
            Predictive Modelling for Sustainable Digital Research Infrastructures
          </p>
          <img
            src={heroLogo}
            alt="GreenDIGIT Challenge Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#github"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="#huggingface"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              🤗 Hugging Face
            </a>
            <a
              href="#codabench"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={18} /> Codabench
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <SectionWrapper id="about" title="About the Challenge">
        <MarkdownSection content={aboutContent} />
      </SectionWrapper>

      {/* Challenge Description */}
      <SectionWrapper id="description" title="Challenge Description" alt>
        <div className="space-y-10">
          <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Dataset</h3>
            <MarkdownSection content={datasetContent} />
          </div>
          <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Tasks</h3>
            <MarkdownSection content={tasksContent} />
          </div>
        </div>
      </SectionWrapper>

      {/* Submission */}
      <SectionWrapper id="submission" title="Submission">
        <MarkdownSection content={submissionContent} />
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper id="timeline" title="Timeline" alt>
        <MarkdownSection content={timelineContent} />
      </SectionWrapper>

      {/* Organizers */}
      <SectionWrapper id="organizers" title="Organizers">
        <MarkdownSection content={organizersContent} />
      </SectionWrapper>

      {/* Partners */}
      <SectionWrapper id="partners" title="Partners" alt>
        <div className="flex flex-wrap justify-center gap-8">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background border border-border rounded-xl px-8 py-5 text-foreground font-semibold hover:shadow-md transition-shadow text-center min-w-[180px]"
            >
              {p.name}
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Contact</h2>
          <p className="text-lg text-muted-foreground mb-2">
            For questions about the challenge, reach us at:
          </p>
          <a
            href="mailto:PKDDchallenge@SoBigData.eu"
            className="text-xl font-semibold text-accent hover:underline"
          >
            PKDDchallenge@SoBigData.eu
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="hero-gradient py-8 text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-primary-foreground/80 text-sm">
            © 2026 GreenDIGIT — ECML-PKDD Challenge. With the support of{' '}
            <a href="https://www.sobigdata.eu" className="underline text-primary-foreground">
              SoBigData RI
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
