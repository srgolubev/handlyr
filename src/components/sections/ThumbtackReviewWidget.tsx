'use client';

import { useEffect, useRef } from 'react';

const TT_SERVICE_PK = '573077145150963741';
const TT_SCRIPT_SRC = `https://www.thumbtack.com/profile/widgets/scripts/?service_pk=${TT_SERVICE_PK}&widget_id=review&type=one`;
const TT_PROFILE_URL =
  'https://www.thumbtack.com/ny/brooklyn/handyman/handlyr-handyman-service/service/573077145150963741';

/**
 * Live "latest review" widget from Thumbtack.
 *
 * The Thumbtack embed script hydrates the `#tt-dynamic` container with the most
 * recent review. We inject the script after mount so it runs once the target
 * node exists. The static markup below acts as a graceful fallback if the
 * third-party script is blocked or fails to load. Styling lives in globals.css
 * (scoped to `#tt-review-widget-one`) so it survives the script re-render.
 */
export default function ThumbtackReviewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current || !containerRef.current) return;
    injected.current = true;

    const script = document.createElement('script');
    script.src = TT_SCRIPT_SRC;
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="widget" id="tt-review-widget-one" ref={containerRef}>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        className="tt-logo"
        src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg"
        alt="Thumbtack"
      />
      <div id="tt-dynamic">
        <div className="tt-left">
          <img
            src="https://cdn.thumbtackstatic.com/fe-assets-web/_assets/images/release/components/avatar/images/legacy-default-avatar-50x50.25cbe35c0002a2eef6cbc5f1c4f271545eafbb59.png"
            alt="Reviewer avatar"
          />
        </div>
        <div className="tt-right">
          <div className="tt-name">Savannah C.</div>
          <div className="tt-stars">
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
            <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
            <span>25 reviews</span>
            <span>0d ago</span>
          </div>
          <p>
            Helped me with a ton of projects: fixing a cabinet and putting it back
            together, hanging a projector, putting up a floating shelf, and more. Will
            hire again!
          </p>
          <a target="_blank" rel="noopener noreferrer" href={TT_PROFILE_URL}>
            See all reviews
          </a>
        </div>
        <br />
      </div>
      {/* eslint-enable @next/next/no-img-element */}
    </div>
  );
}
