import { Suspense } from "react";
import Product from ".";
import Script from "next/script";

const page = () => {
  return (
    <>
      <Suspense>
        <Product />
      </Suspense>
      {/* Google Ads Conversion */}
      <Script id="google-conversion-tracing">{`gtag('event', 'conversion', {'send_to': 'AW-820666851/0CoKCOuk1c4DEOPDqYcD'}); console.log("GTAG CODE FIRED")`}</Script>
      {/* Meta Pixel Conversion */}
      <Script id="meta-conversion-tracking">
        {`fbq('track', 'Lead'); console.log("Meta Lead Event Fired")`}
      </Script>
    </>
  );
};

export default page;
