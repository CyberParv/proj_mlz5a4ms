import Image from "next/image";

interface LogoCloudProps {
  headline?: string;
  logos: { name: string; imageUrl: string }[];
}

export default function LogoCloud({
  headline = "Trusted by creative teams",
  logos = [
    { name: "Atelier Magazine", imageUrl: "/images/about.jpg" },
    { name: "Lumen Bridal", imageUrl: "/images/about.jpg" },
    { name: "Northline Studios", imageUrl: "/images/about.jpg" },
    { name: "Cinder Gallery", imageUrl: "/images/about.jpg" },
  ],
}: Partial<LogoCloudProps>) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        {headline && <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">{headline}</p>}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map(function (logo, i) {
            return (
              <Image
                key={i}
                src={logo.imageUrl}
                alt={logo.name}
                width={160}
                height={60}
                className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-10"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
