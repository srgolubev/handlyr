'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/lib/constants';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };
  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
  };

  const currentItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <>
      <section
        id="projects"
        className="py-16 px-4 lg:py-20 lg:px-6"
        style={{ backgroundColor: '#F9FAFB' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#1A4FD0', letterSpacing: '0.1em' }}
            >
              Our Work
            </p>
            <h2
              className="font-heading font-bold text-3xl lg:text-4xl text-text-dark"
              style={{ letterSpacing: '-0.01em' }}
            >
              Recent Projects
            </h2>
            <p className="mt-3 text-lg text-text-muted">
              {"A look at some jobs we've completed across NYC."}
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {GALLERY_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                aria-label={`View ${item.label} — ${item.location}`}
              >
                <Image
                  src={item.image}
                  alt={`${item.label} in ${item.location}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-colors duration-300" />

                {/* Label — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-t from-primary-900/90 to-transparent">
                    <p className="text-white text-sm font-semibold">
                      {item.label} — {item.location}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${currentItem.label}`}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors duration-150 p-2"
            aria-label="Close lightbox"
          >
            <XIcon className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-neutral-300 transition-colors duration-150 p-2"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ width: '90vw', maxWidth: '700px', height: '60vh' }}
          >
            <Image
              src={currentItem.image}
              alt={`${currentItem.label} in ${currentItem.location}`}
              fill
              sizes="90vw"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-base font-semibold">{currentItem.label} — {currentItem.location}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-neutral-300 transition-colors duration-150 p-2"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {GALLERY_ITEMS.length}
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  );
}
