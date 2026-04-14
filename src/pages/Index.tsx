import { ExternalLink } from 'lucide-react';
import MarkdownSection from '@/components/MarkdownSection';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import heroLogo from '@/assets/cropped-GD_logo.png';
import euFundedLogo from '@/assets/EU Funded POS 2.png';

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
  { label: 'Organisers', href: '#organizers' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

const PARTNERS = [
  { name: 'SoBigData', url: 'https://www.sobigdata.eu' },
  { name: 'GreenDIGIT', url: 'https://greendigit-project.eu/' },
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
            ECML-PKDD 2026: GreenDIGIT Challenge
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
          <TooltipProvider>
            <div className="flex justify-center gap-4 flex-wrap">
            {/*
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
            */}
            <a
              href="https://forms.gle/XbTHLFrGu1Bya5EJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={18} /> Registration Form
            </a>
            <a
              href="https://accounts.d4science.org/auth/realms/d4science/protocol/openid-connect/auth?scope=openid&response_type=code&state=9C47EAB8913E5FB9704A0A9E10F4F795.lr62-02&redirect_uri=https%3A%2F%2Fsobigdata.d4science.org%2Fc%2Fportal%2Flogin&login=true&client_id=sobigdata.d4science.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={18} /> Jupyter Lab VRE
            </a>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-primary-foreground/70 px-5 py-2.5 font-semibold text-primary/70 opacity-70"
                  >
                    <ExternalLink size={18} /> EasyChair Submission
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>registration opens soon.</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
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
      <SectionWrapper id="organizers" title="Organisers">
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
        <div className="container max-w-4xl mx-auto px-6 space-y-8">
          <div className="max-w-3xl mx-auto rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 text-left">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Funding and acknowledgements</h3>
            <p className="text-primary-foreground/85 text-base leading-7 mb-6">
              This work is funded from the European Union&apos;s Horizon Europe research and innovation
              programme through the{' '}
              <a
                href="https://greendigit-project.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground underline underline-offset-4"
              >
                GreenDIGIT project
              </a>
              , under the grant agreement No.{' '}
              <a
                href="https://cordis.europa.eu/project/id/101131207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground underline underline-offset-4"
              >
                101131207
              </a>
              .
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://cordis.europa.eu/project/id/101131207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="European Union funding acknowledgement"
              >
                <img
                  src={euFundedLogo}
                  alt="Funded by the European Union"
                  className="h-auto max-h-[50px] w-auto"
                />
              </a>
              <a
                href="https://greendigit-project.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="GreenDIGIT project"
              >
                <img
                  src={heroLogo}
                  alt="GreenDIGIT"
                  className="h-auto max-h-[100px] w-auto"
                />
              </a>
            </div>
          </div>
          <p className="text-primary-foreground/80 text-sm">
            © 2026 GreenDIGIT - ECML-PKDD Challenge. With the support of{' '}
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
