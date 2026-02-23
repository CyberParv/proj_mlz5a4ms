export interface NavigationItem {
  label: string;
  href: string;
}

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
  category?: string;
  aspectRatio?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  company?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  instagram?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
  startingPrice?: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ContactField {
  name: string;
  type: "text" | "email" | "select" | "textarea";
  label: string;
  required?: boolean;
  options?: string[];
}
