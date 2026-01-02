"use client";

import Script from "next/script";
import { useEffect, useState, useRef } from "react";

const Truspilot = ({ theme = "light", type = "mini" }) => {
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && (window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      {type === "mini" && (
        <div
          ref={ref}
          className="trustpilot-widget mt-4 text-lg"
          data-locale="en-GB"
          data-template-id="5419b6ffb0d04a076446a9af"
          data-businessunit-id="5ad08a9a4848ce0001ded658"
          data-style-height="54px"
          data-style-width="100%"
          data-theme={theme}
          data-tags="SelectedReview"
          data-style-alignment="left"
        >
          <a
            href="https://uk.trustpilot.com/review/houzecheck.com"
            target="_blank"
            rel="noreferrer"
          >
            Trustpilot
          </a>
        </div>
      )}
      {type === "slider" && (
        <div
          ref={ref}
          className="trustpilot-widget"
          data-locale="en-GB"
          data-template-id="54ad5defc6454f065c28af8b"
          data-businessunit-id="5ad08a9a4848ce0001ded658"
          data-style-height="240px"
          data-style-width="100%"
          data-tags="SelectedReview"
          data-review-languages="en"
          data-theme={theme}
        >
          <a
            href="https://uk.trustpilot.com/review/houzecheck.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      )}
      <Script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      ></Script>
    </>
  );
};

export default Truspilot;
