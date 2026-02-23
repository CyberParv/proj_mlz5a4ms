import Image from "next/image";
import TeamGrid from "@/components/TeamGrid";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center space-y-4">
          <SectionHeading />
          <h1 className="text-3xl md:text-5xl font-light">About Lumen</h1>
          <p className="text-zinc-400 text-sm md:text-base">
            The story behind the lens
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 space-y-6">
          <h2 className="text-2xl md:text-4xl font-light">Our Story</h2>
          <div className="text-zinc-300 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Lumen Collective was born in a converted warehouse in Williamsburg, Brooklyn in 2018. What started as a passion project between two photographers has grown into a full-service creative studio with a team of six dedicated artists and technicians.
            </p>
            <p>
              Our name comes from the Latin word for light—the fundamental element of all photography. We believe that understanding and mastering light is what separates good photography from extraordinary imagery.
            </p>
            <p>
              Today, we work with brands, publications, and individuals who share our commitment to visual excellence. Our 4,000 sq ft studio features natural light bays, a full cyclorama, and state-of-the-art equipment to bring any vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-zinc-950">
        <TeamGrid
          headline="The Team"
          subheadline="Photographers, technicians, and visual storytellers"
          members={[
            {
              name: "Maya Chen",
              title: "Founder & Lead Photographer",
              bio: "Former Condé Nast photographer with 15 years of editorial experience. Maya's work has appeared in Vogue, Harper's Bazaar, and The New York Times Magazine.",
              imageUrl: "/images/team.jpg?4",
            },
            {
              name: "David Okafor",
              title: "Co-Founder & Commercial Director",
              bio: "Specializing in product and architectural photography, David brings a meticulous eye for detail and a background in industrial design.",
              imageUrl: "/images/team.jpg?5",
            },
            {
              name: "Sofia Reyes",
              title: "Portrait Photographer",
              bio: "Known for her intimate approach to portraiture, Sofia creates images that reveal the authentic essence of her subjects.",
              imageUrl: "/images/team.jpg?6",
            },
            {
              name: "Alex Kim",
              title: "Digital Technician & Retoucher",
              bio: "A master of post-production, Alex ensures every image meets our exacting standards of quality and artistic vision.",
              imageUrl: "/images/team.jpg?7",
            },
          ]}
        />
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          <h2 className="text-2xl md:text-4xl font-light">The Studio</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[
              { url: "/images/gallery.jpg?35", caption: "Main shooting bay with 20ft ceilings" },
              { url: "/images/gallery.jpg?36", caption: "Full white cyclorama" },
              { url: "/images/gallery.jpg?37", caption: "Professional lighting setup" },
              { url: "/images/gallery.jpg?38", caption: "Client lounge and meeting area" },
            ].map((image) => (
              <div key={image.url} className="min-w-[280px] md:min-w-[360px] space-y-2">
                <div className="relative aspect-[4/3]">
                  <Image src={image.url} alt={image.caption} fill className="object-cover rounded-sm" sizes="(min-width: 768px) 360px, 280px" />
                </div>
                <p className="text-xs uppercase tracking-widest text-zinc-400">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
