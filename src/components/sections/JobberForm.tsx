'use client';

import { useEffect, useRef, useState } from 'react';

const JOBBER_ID = 'd414ffea-724d-4732-bb6f-884d8b3b05e6-2259100';
const JOBBER_CSS = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
const JOBBER_JS = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
const JOBBER_FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/d414ffea-724d-4732-bb6f-884d8b3b05e6/public/work_request/embedded_work_request_form?form_id=2259100';

let activeGeneration = 0;

function Skeleton() {
  return (
    <div className="space-y-4 animate-pulse" aria-hidden="true">
      {/* Progress steps */}
      <div className="flex gap-2 mb-6">
        {[60, 40, 40].map((w, i) => (
          <div key={i} className="h-1.5 rounded-full bg-neutral-200" style={{ width: `${w}%` }} />
        ))}
      </div>

      {/* Title */}
      <div className="h-5 w-2/5 rounded-lg bg-neutral-200" />

      {/* Two-column name row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="h-11 rounded-xl bg-neutral-100" />
        <div className="h-11 rounded-xl bg-neutral-100" />
      </div>

      {/* Phone field */}
      <div className="h-5 w-1/5 rounded-lg bg-neutral-200" />
      <div className="h-11 rounded-xl bg-neutral-100" />

      {/* SMS consent block */}
      <div className="space-y-1.5">
        <div className="h-3 w-full rounded bg-neutral-100" />
        <div className="h-3 w-4/5 rounded bg-neutral-100" />
        <div className="h-3 w-3/5 rounded bg-neutral-100" />
      </div>

      {/* Checkbox row */}
      <div className="flex gap-3 items-start">
        <div className="h-4 w-4 rounded bg-neutral-200 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 flex-1">
          <div className="h-3 w-full rounded bg-neutral-100" />
          <div className="h-3 w-3/4 rounded bg-neutral-100" />
        </div>
      </div>

      {/* Address fields */}
      <div className="h-11 rounded-xl bg-neutral-100" />
      <div className="h-11 rounded-xl bg-neutral-100" />
      <div className="grid grid-cols-3 gap-3">
        <div className="h-11 rounded-xl bg-neutral-100" />
        <div className="h-11 rounded-xl bg-neutral-100" />
        <div className="h-11 rounded-xl bg-neutral-100" />
      </div>

      {/* Footer: logo + button */}
      <div className="flex items-center justify-between pt-2">
        <div className="h-6 w-28 rounded bg-neutral-200" />
        <div className="h-10 w-20 rounded-xl bg-neutral-200" />
      </div>
    </div>
  );
}

export default function JobberForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const myGeneration = ++activeGeneration;

    if (!document.querySelector(`link[href="${JOBBER_CSS}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = JOBBER_CSS;
      link.media = 'screen';
      document.head.appendChild(link);
    }

    // Watch for Jobber injecting the form into the container
    let observer: MutationObserver | null = null;
    if (containerRef.current) {
      observer = new MutationObserver(() => {
        if (containerRef.current && containerRef.current.childElementCount > 0) {
          setLoaded(true);
          observer?.disconnect();
        }
      });
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    const timer = setTimeout(() => {
      if (activeGeneration !== myGeneration) return;

      document.querySelector(`script[src="${JOBBER_JS}"]`)?.remove();
      if (containerRef.current) containerRef.current.innerHTML = '';

      const script = document.createElement('script');
      script.src = JOBBER_JS;
      script.setAttribute('clienthub_id', JOBBER_ID);
      script.setAttribute('form_url', JOBBER_FORM_URL);
      document.head.appendChild(script);
    }, 50);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      if (activeGeneration !== myGeneration) return;
      document.querySelector(`script[src="${JOBBER_JS}"]`)?.remove();
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="relative" style={{ minHeight: loaded ? undefined : '540px' }}>
      {/* Jobber container */}
      <div id={JOBBER_ID} ref={containerRef} />

      {/* Skeleton: absolute overlay, fades out once form is ready */}
      <div
        className="absolute inset-0 bg-white transition-opacity duration-700"
        style={{
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? 'none' : 'auto',
        }}
        aria-hidden={loaded}
      >
        <Skeleton />
      </div>
    </div>
  );
}
