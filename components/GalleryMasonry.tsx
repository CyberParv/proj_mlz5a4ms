"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Selected works",
  subheadline = "A curated look at recent editorial, portrait, and wedding stories.",
  images = [
    { url: "/images/gallery.jpg", alt: "Editorial portrait in soft light", caption: "Editorial portrait" },
    { url: "/images/gallery.jpg", alt: "Wedding couple in shadow and light", caption: "Wedding narrative" },
    { url: "/images/gallery.jpg", alt: "Minimal studio portrait", caption: "Studio portrait" },
    { url: "/images/gallery.jpg", alt: "Fashion detail and movement", caption: "Fashion detail" },
    { url: "/images/gallery.jpg", alt: "Architectural framing", caption: "Architectural framing" },
    { url: "/images/gallery.jpg", alt: "Golden hour silhouette", caption: "Golden hour" },
  ],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-24 md:py-32" id="portfolio">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map(function (img, i) {
            return (
              <div
                key={i}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm"
                onClick={function () {
                  setSelectedImage(img);
                }}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-xs uppercase tracking-widest text-white">{img.caption}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={function () {
              setSelectedImage(null);
            }}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              className="max-h-[85vh] max-w-[90vw] rounded-sm object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
