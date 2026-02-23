import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-4">
          <SectionHeading />
          <h1 className="text-3xl md:text-5xl font-light">Get in Touch</h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Let&apos;s discuss your next project
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <ContactForm
            headline="Start a Project"
            subheadline="Share your vision and we’ll craft a tailored proposal."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "hello@lumencollective.co" },
              { icon: "Phone", label: "Phone", value: "+1 (718) 555-0142" },
              { icon: "MapPin", label: "Studio", value: "247 Wythe Avenue, Studio 4B, Brooklyn, NY 11249" },
              { icon: "Clock", label: "Hours", value: "Monday – Friday: 9am – 6pm" },
            ]}
          />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="aspect-[16/6] w-full overflow-hidden rounded-sm border border-zinc-800">
            <iframe
              title="Lumen Collective Studio Location"
              src="https://www.google.com/maps?q=40.7177,-73.9571&z=15&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
