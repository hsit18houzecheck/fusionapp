import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()(
  BuilderDevTools()({
    turbopack: {},
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.builder.io",
          port: "",
          pathname: "/api/v1/image/**",
        },
        {
          protocol: "https",
          hostname: "user-images.trustpilot.com",
          port: "",
        },
        {
          protocol: "https",
          hostname: "houzecheck-pdfreports.s3.eu-west-2.amazonaws.com",
          port: "",
        },
        {
          protocol: "https",
          hostname: "houzecheck.service-now.com",
          port: "",
        },
      ],
      dangerouslyAllowSVG: true,
      contentDispositionType: "attachment",
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
      return [
        {
          source: "/about",
          destination: "/about-us",
          permanent: true,
        },
        {
          source: "/careers",
          destination: "/about-us",
          permanent: true,
        },
        {
          source: "/contact",
          destination: "/about-us",
          permanent: true,
        },
        {
          source: "/our-reach",
          destination: "/rics-surveyor-jobs",
          permanent: true,
        },
      ];
    },
  }),
);

export default nextConfig;
