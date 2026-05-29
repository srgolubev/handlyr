'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_ITEMS } from '@/lib/constants';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';

type GalleryProps = {
  /** Limit how many items render (e.g. 6 for the homepage preview). Omit to show all. */
  limit?: number;
  /** Show a "View all projects" link below the grid (used on the homepage preview). */
  showViewAll?: boolean;
};

export default function Gallery({ limit, showViewAll = false }: GalleryProps) {
  const items = limit ? GALLERY_ITEMS.slice(0, limit) : GALLERY_ITEMS;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number, el: HTMLButtonElement) => {
    triggerRef.current = el;
    setLightboxIndex(index);
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    triggerRef.current?.focus(); // restore focus to the thumbnail that opened it
  };
  const prevImage = () => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  };
  const nextImage = () => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));
  };

  // Keyboard support while the lightbox is open: Escape closes, arrows navigate,
  // Tab is trapped; the rest of the page is made inert.
  useEffect(() => {
    if (lightboxIndex === null) return;
    closeBtnRef.current?.focus();

    // Inert every body child except the portalled dialog itself.
    const dialog = dialogRef.current;
    const inerted = Array.from(document.body.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && el !== dialog
    );
    inerted.forEach((el) => el.setAttribute('inert', ''));
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Tab') {
        // Trap focus within the dialog.
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>('button');
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      inerted.forEach((el) => el.removeAttribute('inert'));
    };
  }, [lightboxIndex]);

  const currentItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <>
      <section
        id="projects"
        className="py-16 px-4 lg:py-20 lg:px-6 bg-neutral-50"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow mb-3">Our Work</p>
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
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={(e) => openLightbox(index, e.currentTarget)}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                aria-label={`View project: ${item.label}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-colors duration-300" />

                {/* Label — slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-t from-primary-900/90 to-transparent">
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-white/80 text-xs">{item.service}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {showViewAll && (
            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md transition-colors"
              >
                View all projects
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox modal — portalled to <body> so the rest of the page can be inerted */}
      {lightboxIndex !== null && currentItem && createPortal(
        <div
          ref={dialogRef}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${currentItem.label}`}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
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
              alt={currentItem.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-base font-semibold">{currentItem.label}</p>
              <p className="text-white/80 text-sm">{currentItem.service}</p>
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
            {lightboxIndex + 1} / {items.length}
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
            aria-hidden="true"
          />
        </div>,
        document.body
      )}
    </>
  );
}
