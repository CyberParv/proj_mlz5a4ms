import GalleryMasonry from "@/components/GalleryMasonry";
import SectionHeading from "@/components/SectionHeading";

export default function WorkPage() {
  return (
    <main className="bg-black text-white">
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          <SectionHeading />
          <h1 className="text-3xl md:text-5xl font-light">Our Work</h1>
          <p className="text-zinc-400 text-sm md:text-base">
            Six years of visual storytelling across editorial, commercial, and fine art projects.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <GalleryMasonry
          headline="Portfolio"
          subheadline="Explore the full collection"
          images={[
            { url: "/images/gallery.jpg?23", alt: "Editorial portrait series", caption: "Editorial Portraits" },
            { url: "/images/gallery.jpg?24", alt: "Luxury product still life", caption: "Luxury Still Life" },
            { url: "/images/gallery.jpg?25", alt: "Architectural interior", caption: "Architectural Digest" },
            { url: "/images/gallery.jpg?26", alt: "Fine art landscape", caption: "Fine Art Landscape" },
            { url: "/images/gallery.jpg?27", alt: "Fashion lookbook", caption: "Fashion Lookbook" },
            { url: "/images/gallery.jpg?28", alt: "Commercial campaign", caption: "Commercial Campaign" },
            { url: "/images/gallery.jpg?29", alt: "Portrait series", caption: "Portrait Series" },
            { url: "/images/gallery.jpg?30", alt: "Minimal still life", caption: "Minimal Still Life" },
            { url: "/images/gallery.jpg?31", alt: "Editorial cover story", caption: "Cover Story" },
            { url: "/images/gallery.jpg?32", alt: "Fine art texture study", caption: "Texture Study" },
            { url: "/images/gallery.jpg?33", alt: "Brand campaign", caption: "Brand Campaign" },
            { url: "/images/gallery.jpg?34", alt: "Studio portrait", caption: "Studio Portrait" },
          ]}
        />
      </section>
    </main>
  );
}
