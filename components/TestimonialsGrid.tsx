import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  rating?: number;
}

interface TestimonialsGridProps {
  headline: string;
  subheadline?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({
  headline = "Words from our clients",
  subheadline = "Quiet confidence and timeless imagery that lasts beyond the day.",
  testimonials = [
    {
      quote: "Every frame felt effortless. The gallery is modern, cinematic, and full of emotion.",
      name: "Elena Hart",
      title: "Editorial Director",
      rating: 5,
    },
    {
      quote: "The team guided us with calm direction and delivered an intimate story we’ll cherish.",
      name: "Caleb Morgan",
      title: "Wedding Client",
      rating: 5,
    },
    {
      quote: "A minimal aesthetic with powerful impact. The portraits are pure art.",
      name: "Sora Lee",
      title: "Creative Producer",
      rating: 5,
    },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className="py-24 md:py-32" id="testimonials">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(function (t, i) {
            var initials = t.name.split(" ").map(function (n) { return n[0]; }).join("");
            return (
              <Card key={i} className="border bg-background">
                <CardContent className="p-6">
                  {t.rating && (
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: t.rating }).map(function (_, j) {
                        return (
                          <span key={j} className="text-foreground/80">
                            ★
                          </span>
                        );
                      })}
                    </div>
                  )}
                  <p className="text-muted-foreground italic">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar>
                      {t.avatarUrl ? <AvatarImage src={t.avatarUrl} alt={t.name} /> : null}
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
