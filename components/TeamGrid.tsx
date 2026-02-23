import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "The artists behind the lens",
  subheadline = "A small, focused team dedicated to refined storytelling.",
  members = [
    {
      name: "Mae Laurent",
      title: "Founder & Lead Photographer",
      imageUrl: "/images/team.jpg",
      bio: "Curates cinematic narratives with a calm, editorial approach.",
    },
    {
      name: "Jonas Reed",
      title: "Associate Photographer",
      imageUrl: "/images/team.jpg",
      bio: "Specializes in modern portraiture and subtle movement.",
    },
    {
      name: "Iris Vale",
      title: "Production & Styling",
      imageUrl: "/images/team.jpg",
      bio: "Shapes sets, wardrobe, and mood for cohesive visual stories.",
    },
    {
      name: "Kai Mercer",
      title: "Retouching Artist",
      imageUrl: "/images/team.jpg",
      bio: "Refines every frame with a minimal, film-inspired finish.",
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-24 md:py-32 bg-muted/50" id="about">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card key={i} className="overflow-hidden border-0 bg-background shadow-md text-center">
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-primary">{member.title}</p>
                  {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
