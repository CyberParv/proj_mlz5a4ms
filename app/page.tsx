import Image from "next/image";
import HeroLamp from "@/components/HeroLamp";
import GalleryMasonry from "@/components/GalleryMasonry";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CTABanner from "@/components/CTABanner";
import LogoCloud from "@/components/LogoCloud";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-5xl px-6 py-24">
          <HeroLamp
            title="Lumen Collective"
            words={["Fine Art", "Commercial", "Editorial", "Portrait"]}
            subtitle="Capturing light, crafting stories"
            primaryCta={{ label: "View Portfolio", href: "#portfolio" }}
            secondaryCta={{ label: "Get in Touch", href: "/contact" }}
          />
        </div>
      </section>

      <section id="portfolio" className="py-24 md:py-32">
        <GalleryMasonry
          headline="Selected Work"
          subheadline="A curated collection from our recent projects"
          images={[
            { url: "/images/gallery.jpg?1", alt: "Fashion editorial for Vogue Italia", caption: "Vogue Italia — Editorial" },
            { url: "/images/gallery.jpg?2", alt: "Product campaign for Aesop skincare", caption: "Aesop — Product Campaign" },
            { url: "/images/gallery.jpg?3", alt: "Abstract light study", caption: "Luminescence — Fine Art" },
            { url: "/images/gallery.jpg?4", alt: "Actor headshot", caption: "Portrait — Marcus Chen" },
            { url: "/images/gallery.jpg?5", alt: "Architecture digest feature", caption: "Architectural Digest — Feature" },
            { url: "/images/gallery.jpg?6", alt: "Luxury watch campaign", caption: "Cartier — Campaign" },
            { url: "/images/gallery.jpg?7", alt: "Coastal landscapes", caption: "Oregon Series — Fine Art" },
            { url: "/images/gallery.jpg?8", alt: "CEO portrait", caption: "Apex Ventures — Portrait" },
          ]}
        />
      </section>

      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <SectionHeading />
            <h2 className="text-2xl md:text-4xl font-light tracking-tight">The Collective</h2>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Founded in 2018 in Brooklyn, Lumen Collective is a photography studio built on the belief that light is the ultimate storyteller.
              We transform fleeting moments into timeless imagery for brands, publications, and individuals.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Every photograph begins with understanding—the brand, the person, the emotion. We craft visual narratives that resonate, inspire, and endure.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-2xl font-light">200+</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-2xl font-light">12</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">Industry Awards</p>
              </div>
              <div>
                <p className="text-2xl font-light">6</p>
                <p className="text-xs uppercase tracking-widest text-zinc-400">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image src="/images/about.jpg" alt="Lumen Collective studio" fill className="object-cover rounded-sm" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-light">Services</h2>
            <p className="text-zinc-400 text-sm md:text-base">
              Tailored photography solutions for every vision
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Commercial Photography",
                description:
                  "Product launches, advertising campaigns, and brand imagery that elevates your visual identity.",
                price: "From $3,500",
                image: "/images/gallery.jpg?9",
              },
              {
                title: "Editorial & Fashion",
                description:
                  "Magazine spreads and lookbooks with a distinctive artistic vision.",
                price: "From $5,000",
                image: "/images/gallery.jpg?10",
              },
              {
                title: "Fine Art Prints",
                description:
                  "Limited edition archival prints from our personal collections.",
                price: "From $800",
                image: "/images/gallery.jpg?11",
              },
              {
                title: "Portrait Sessions",
                description:
                  "Executive headshots and personal branding in-studio or on location.",
                price: "From $1,200",
                image: "/images/gallery.jpg?12",
              },
            ].map((service) => (
              <Card key={service.title} className="bg-black border border-zinc-800 rounded-sm overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 100vw" />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-light">{service.title}</h3>
                  <p className="text-zinc-400 text-sm">{service.description}</p>
                  <p className="text-xs uppercase tracking-widest text-zinc-500">{service.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-light">Featured Project</h2>
            <p className="text-zinc-400 text-sm md:text-base">Aesop — Reverence Collection</p>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              A visual exploration of texture, light, and botanical essence for Aesop&apos;s latest skincare line. Shot over three days in our Brooklyn studio using natural light and handcrafted sets.
            </p>
            <CTABanner
              headline="View the full campaign"
              description="Explore the complete Reverence Collection visual story."
              ctaLabel="View Full Project"
              ctaHref="/work/aesop-reverence"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative aspect-[3/4]">
              <Image src="/images/gallery.jpg?13" alt="Aesop campaign image" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[3/4]">
              <Image src="/images/gallery.jpg?14" alt="Aesop campaign image" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[3/4]">
              <Image src="/images/gallery.jpg?15" alt="Aesop campaign image" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 md:py-32 bg-zinc-950">
        <TestimonialsGrid
          headline="Client Words"
          testimonials={[
            {
              quote:
                "Lumen Collective understood our brand vision instantly. The images they created for our campaign exceeded every expectation and drove a 40% increase in engagement.",
              name: "Elena Vasquez",
              title: "Creative Director, Aesop North America",
              avatarUrl: "/images/team.jpg?1",
            },
            {
              quote:
                "Working with this team was transformative. They don't just take photos—they create art that tells your story in ways you never imagined possible.",
              name: "James Thornton",
              title: "Editor-in-Chief, Architectural Digest",
              avatarUrl: "/images/team.jpg?2",
            },
            {
              quote:
                "The portrait session was intimate, professional, and the results were stunning. I've never felt more confident in my professional imagery.",
              name: "Dr. Amara Okonkwo",
              title: "Founder & CEO, Meridian Health Tech",
              avatarUrl: "/images/team.jpg?3",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32">
        <LogoCloud
          headline="Trusted By"
          logos={[
            { name: "Vogue", imageUrl: "/images/gallery.jpg?16" },
            { name: "Aesop", imageUrl: "/images/gallery.jpg?17" },
            { name: "Cartier", imageUrl: "/images/gallery.jpg?18" },
            { name: "Architectural Digest", imageUrl: "/images/gallery.jpg?19" },
            { name: "Nike", imageUrl: "/images/gallery.jpg?20" },
            { name: "Apple", imageUrl: "/images/gallery.jpg?21" },
            { name: "The New York Times", imageUrl: "/images/gallery.jpg?22" },
          ]}
        />
      </section>

      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <CTABanner
            headline="Let's Create Together"
            description="Every great image begins with a conversation."
            ctaLabel="Start a Project"
            ctaHref="/contact"
            secondaryCtaLabel="View Work"
            secondaryCtaHref="/work"
          />
        </div>
      </section>
    </main>
  );
}
