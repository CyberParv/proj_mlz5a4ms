import { Button } from "@/components/ui/button";

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = "Ready to craft your visual story?",
  description = "Secure your date and we’ll shape a cinematic gallery tailored to your brand or celebration.",
  ctaLabel = "Reserve your session",
  ctaHref = "#contact",
  secondaryCtaLabel = "View portfolio",
  secondaryCtaHref = "#portfolio",
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-foreground py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-light text-background md:text-4xl">{headline}</h2>
        {description && <p className="mt-4 text-lg text-background/80">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="rounded-none px-8 py-6 text-xs font-light tracking-widest uppercase" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-background text-background hover:bg-background/10 px-8 py-6 text-xs font-light tracking-widest uppercase"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
