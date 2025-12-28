import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        "@media (max-width: 991px)": {
          flexDirection: "column",
          alignItems: "stretch",
          gap: "0px",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: "normal",
          width: "50%",
          marginLeft: "0px",
        }}
        className="hidden md:flex"
      >
        <div />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: "normal",
          width: "50%",
          marginLeft: "20px",
        }}
        className="w-full md:w-1/2 md:ml-5"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgb(0, 0, 0)",
            fontFamily: 'Geist, "Geist Fallback"',
            fontWeight: "400",
            justifyContent: "center",
            minHeight: "1323px",
          }}
          className="dark:bg-black"
        >
          <main
            style={{
              display: "flex",
              alignItems: "flex-start",
              backgroundColor: "rgb(0, 0, 0)",
              flexDirection: "column",
              fontWeight: "400",
              justifyContent: "space-between",
              maxWidth: "768px",
              minHeight: "1323px",
              width: "100%",
              padding: "128px 64px",
            }}
            className="dark:bg-black"
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                fontWeight: "400",
                gap: "24px",
                textAlign: "left",
              }}
            >
              <h1
                style={{
                  color: "oklch(0.985 0 0)",
                  letterSpacing: "-0.75px",
                  maxWidth: "320px",
                  font: "600 30px/40px Arial, sans-serif",
                }}
              >
                To get started, edit the page.tsx file.
              </h1>
              <button
                style={{
                  all: "unset",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  appearance: "none",
                  color: "white",
                  borderRadius: "4px",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "20px 1px 3px 0 rgba(0, 0, 0, 1)",
                  backgroundColor: "rgb(1000, 0, 0)",
                  margin: "20px auto 0",
                  padding: "15px 25px",
                }}
              >
                Test Button
              </button>
              <p
                style={{
                  color: "oklch(0.705 0.015 286.067)",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  maxWidth: "448px",
                }}
              >
                Looking for a starting point or more instructions? Head over to{" "}
                <a
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  style={{
                    display: "inline",
                    color: "oklch(0.985 0 0)",
                    fontWeight: "500",
                  }}
                >
                  Templates
                </a>{" "}
                or the{" "}
                <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  style={{
                    display: "inline",
                    color: "oklch(0.985 0 0)",
                    fontWeight: "500",
                  }}
                >
                  Learning
                </a>{" "}
                center.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                fontWeight: "500",
                gap: "16px",
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgb(237, 237, 237)",
                  borderRadius: "3.35544e+07px",
                  color: "rgb(10, 10, 10)",
                  fontWeight: "500",
                  gap: "8px",
                  height: "48px",
                  justifyContent: "center",
                  transitionDuration: "0.15s",
                  transitionProperty:
                    "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "158px",
                  WebkitTransition:
                    "color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                  WebkitTransitionProperty:
                    "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
                  padding: "0 20px",
                }}
              >
                <Image
                  alt="Vercel logomark"
                  loading="lazy"
                  width={16}
                  height={16}
                  src="/vercel.svg"
                  style={{
                    display: "block",
                    aspectRatio: "auto 16 / 16",
                    color: "rgba(0, 0, 0, 0)",
                    filter: "invert(1)",
                    fontWeight: "500",
                    width: "16px",
                  }}
                />
                Deploy Now
              </a>
              <div
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderColor: "oklab(0.999994 0.0000455678 0.0000200868 / 0.145)",
                  borderRadius: "3.35544e+07px",
                  borderWidth: "1px",
                  fontWeight: "500",
                  height: "48px",
                  justifyContent: "center",
                  transitionDuration: "0.15s",
                  transitionProperty:
                    "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  width: "158px",
                  WebkitTransition:
                    "color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                  WebkitTransitionProperty:
                    "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to",
                  padding: "0 20px",
                }}
              >
                Documentation
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
