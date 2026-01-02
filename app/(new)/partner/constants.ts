import type { PartnerPageData } from "./types";

export const DEFAULT_PARTNER_PAGE_DATA: PartnerPageData = {
  partnerData: {
    accredition: {
      backgroundColor: "#FFFBED",
      logos: [
        {
          alt: "esurv-logo",
          url: "/assets/images/esurv-logo.webp",
        },
        {
          alt: "homemove-logo",
          url: "/assets/images/homemove-logo.webp",
        },
        {
          alt: "sdl-logo",
          url: "/assets/images/sdl-logo.webp",
        },
        {
          alt: "zoopla-logo",
          url: "/assets/images/zoopla-logo.webp",
        },
      ],
    },
    mythBusting: {
      eyebrow: "About partnerships",
      title: "Partnership Myth-busting!",
      subtitle: "True or false?",
      myths: [
        {
          myth: "There is a cap on referrals and commission... A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report. Tap to reveal the answer",
          answer:
            "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
          actionBtn: {
            label: "Tap to reveal the answer",
          },
        },
        {
          myth: "It takes 3 months to set up a partnership with Houzecheck...",
          answer:
            "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
          actionBtn: {
            label: "Tap to reveal the answer",
          },
        },
        {
          myth: "I can't integrate with the Houzecheck Platform...",
          answer:
            "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
          actionBtn: {
            label: "Tap to reveal the answer",
          },
        },
        {
          myth: "Partners need technical knowledge about surveys to make referrals...",
          answer:
            "A qualified RICS surveyor's inspection of the property providing a detailed and thorough condition survey report.",
          actionBtn: {
            label: "Tap to reveal the answer",
          },
        },
      ],
      ctaButton: {
        label: "Start earning now",
        backgroundColor: "#1F1801",
        textColor: "#F7DE8C",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fe762070673024cc184b6db8bf2db9954",
      },
    },
    hero: {
      button: {
        label: "Sign-up now",
        rightIcon: "MdArrowOutward",
        url: "/rics-surveyor-jobs",
        variant: "default",
      },
      eyebrow: "HOUZECHECK PARTNERS",
      ricsLogo:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fc8de3ce652b743d8ad9a9e63bf6eca01",
      subtitle:
        "The UK’s most trusted name for Private Surveys. Start earning your commission within 30 minutes.",
      title: "Trusted by customers. Trusted by partners.",
    },
    meetPeople: {
      eyebrow: "PARTNERS",
      name: "Richard",
      paragraph:
        "<p>At Houzecheck, we’ve built more than just a surveying platform - we’ve built a trusted partnership network designed to make life easier for brokers, solicitors, and introducers. </p><p>Our technology makes referrals effortless. With one simple connection, you can offer your clients fast, reliable RICS surveys backed by our nationwide team of 150+ surveyors. There’s no red tape, no chasing -  just a smooth process where commissions are tracked automatically and paid quickly. But the real difference is the confidence you can give your clients. </p><p>With over 45,000 surveys completed, a 48-hour average turnaround, and an Excellent Trustpilot rating, you know they’re in safe hands. When you partner with Houzecheck, you’re not just choosing efficiency - you’re choosing an independent brand that cares deeply about service, reputation, and results. </p><p>I’d be delighted to show you how easy it is to get started and how rewarding a partnership with us can be.</p>",
      photo:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fd150fe436de14f0ab878d5f65b35cad6?format=webp",
      signature:
        "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F7aa5133375e44fb68792c87660054f3f",
      subTitle: "A note from our Commercial Director, Richard Sexton...",
      title: "A note from our Commercial Director",
    },
    news: {
      eyebrow: "PRESS",
      news: [
        {
          button: {
            label: "View article",
            rightIcon: "MdArrowOutward",
            variant: "default",
          },
          eyebrow: "ANNOUNCEMENT",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
          subtitle:
            "Proptech surveying platform HouzeCheck has appointed mortgage valuations veteran Richard Sexton as its new commercial director.",
          title: "Richard Sexton joins HouzeCheck",
        },
        {
          button: {
            label: "View article",
            rightIcon: "MdArrowOutward",
            variant: "default",
          },
          eyebrow: "INSIGHTS",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F92cce2331d4a466d93eee4e90cbb9f34",
          subtitle:
            "Richard Sexton (pictured), a stalwart in the mortgage valuations sector, has been appointed as the commercial director of proptech surveying portal HouzeCheck.",
          title: "Valuations veteran Sexton joins HouzeCheck",
        },
      ],
      subtitle:
        "Read articles about the things we are doing across the industry.",
      title: "Houzecheck In The News",
    },
    offerBanner: {
      backgroundImage: "/assets/images/offer-section.webp",
      button: { label: "Click for offer", variant: "default" },
      extraText: { text: "*Disclaimer lives here" },
      eyebrow: { color: "#F39E8A", text: "OFFERS" },
      subtitle: {
        color: "#FFFFFF",
        text: "Join in December for an exclusive ££ sign-on bonus.",
      },
      title: { color: "#FFFBED", size: "lg", text: "December Offer" },
    },
    whatItMeansVideo: {
      sectionHeader: {
        eyebrow: { text: "PARTNER PROFILE" },
        subheading: { text: "Check out a selection of our partner videos." },
        title: { text: "What Does It Mean To Be A Houzecheck Partner?" },
      },
      video: {
        backgroundImage: "/assets/images/what-it-means.webp",
        eyebrow: "PARTNER PROFILE",
        subtitle:
          "Watch Richard talk about the successes that come with partnering with us.",
        title: "Meet Richard",
        video: {
          button: {
            label: "Watch Video",
            leftIcon: "MdPlayCircleOutline",
            variant: "default",
          },
          title: "Watch Video",
        },
      },
    },
    techDemoVideo: {
      sectionHeader: {
        eyebrow: { text: "DEMO VIDEO" },
        subheading: {
          text: "SurveyFast – Available and access Everywhere (iOS, Android, and any web browser)",
        },
        title: { text: "Houzecheck Tech Demo" },
      },
      video: {
        backgroundImage: "/assets/images/tech-demo.webp",
        video: {
          button: {
            label: "Watch Video",
            leftIcon: "MdPlayCircleOutline",
            variant: "default",
          },
          title: "Watch Video",
        },
      },
    },
    vision: {
      description:
        "<p>Our one-click referral system removes red tape and complexity, giving your clients access to fast, reliable RICS surveys while protecting your reputation and enhancing your own proposition, every step of the way. With a nationwide network of 150+ chartered surveyors, 45,000+ surveys completed, and an Excellent Trustpilot rating, we combine cutting-edge technology with a customer-first approach.</p><p><br></p><p>Unlike many competitors, we aren’t distracted by having to service lender work- which frequently impacts their turnaround times.</p><p><br></p><p>When you partner with Houzecheck, you’re not just offering surveys - you’re offering peace of mind, backed by a brand that’s redefining surveying standards across the UK.</p>",
      title: "At Houzecheck, we make partnering effortless. ",
    },
    partnerReviews: {
      backgroundColor: "#FFFFFF",
      eyebrow: {
        text: "Partner Profiles",
        color: "#F39E8A",
      },
      title: {
        text: "Hear From Our Partners",
        color: "#1F1801",
      },
      subtitle: {
        text: "Check out a selection of our partner videos.",
        color: "#616061",
      },
      cards: [
        {
          eyebrow: "SURVEYOR PROFILE",
          title: "Abdi Ahmed",
          subtitle: "MSc AssocRICS, RICS Registered Valuer",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F1a7735a406804d41a7605bfdf947dc14",
          textAlign: "left",
          textList: [
            {
              title:
                '<p><span style="font-size: 16px;">Houzecheck were extremely helpful in providing me with guidance and support when I set myself up as an independent surveyor. Their ongoing customer service and technical support give me the benefits of big company backing and the flexibility for me to manage my own workload. The HouzeCheck app tech is so easy to use, it has helped me create better site notes and reports.</span></p>',
            },
          ],
          button: {
            label: "Read Review",
            variant: "secondary",
          },
        },
        {
          eyebrow: "SURVEYOR PROFILE",
          title: "Abdi Ahmed",
          subtitle: "MSc AssocRICS, RICS Registered Valuer",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F1a7735a406804d41a7605bfdf947dc14",
          textAlign: "left",
          textList: [
            {
              title:
                '<p><span style="font-size: 16px;">Houzecheck were extremely helpful in providing me with guidance and support when I set myself up as an independent surveyor. Their ongoing customer service and technical support give me the benefits of big company backing and the flexibility for me to manage my own workload. The HouzeCheck app tech is so easy to use, it has helped me create better site notes and reports.</span></p>',
            },
          ],
          button: {
            label: "Read Review",
            variant: "secondary",
          },
        },
      ],
    },
    partnerSuccess: {
      features: [
        {
          backgroundImage: "/assets/images/partner/success1.webp",
          contentPosition: "center",
          subtitle: {
            textColor: "#616061",
            value: "residential surveys completed",
          },
          title: {
            textColor: "#1F1801",
            value: "45,000",
          },
        },
        {
          backgroundImage: "/assets/images/partner/success2.webp",
          contentPosition: "center",
          subtitle: {
            textColor: "#FFFFFF",
            value: "worth of properties inspected.",
          },
          title: {
            textColor: "#F7DE8C",
            value: "£12 billion",
          },
        },
        {
          backgroundImage: "/assets/images/partner/success3.webp",
          contentPosition: "center",
          subtitle: {
            textColor: "#616061",
            value: "“Excellent” rated reviews",
          },
          title: {
            textColor: "#1F1801",
            value: "1,900",
          },
        },
        {
          backgroundImage: "/assets/images/partner/success4.webp",
          contentPosition: "center",
          subtitle: {
            textColor: "#FFFFFF",
            value: "Community of Surveyors",
          },
          title: {
            textColor: "#F7DE8C",
            value: "150+",
          },
        },
        {
          backgroundImage: "/assets/images/partner/success5.webp",
          contentPosition: "center",
          subtitle: {
            textColor: "#FFFFFF",
            value: "Average Turnaround from instruction",
          },
          title: {
            textColor: "#F7DE8C",
            value: "4 Working Days",
          },
        },
      ],
      sectionHeader: {
        eyebrow: {
          color: "#F39E8A",
          text: "PARTNER SUCCESS",
        },
        title: {
          color: "#1F1801",
          text: "Our Success",
        },
      },
    },
    faqs: {
      description:
        '<p>\n  <span style="font-size: 14px;">Find answers to commonly asked questions and if you still have questions, you can </span\n  ><a href="/about-us" rel="noopener noreferrer" style="font-size: 14px;"\n    ><strong><u>email</u></strong></a\n  ><span style="font-size: 14px;"> us or give us a </span\n  ><a href="/about-us" rel="noopener noreferrer" style="font-size: 14px;"\n    ><strong><u>call</u></strong></a\n  >\n</p>\n',
      eyebrow: "EVERYTHING YOU NEED TO KNOW",
      faq: [
        {
          answer:
            "Almost instantly. Once you complete our quick onboarding, you can either connect via API or use our referral portal, meaning you can start referring the same day.",
          question: "How quickly can I start referring clients?",
        },
        {
          answer:
            "Our one-click referral system is designed to be simple. You can connect via API in minutes, or use our secure online portal with no technical setup required.",
          question: "How easy is it to integrate with Houzecheck?",
        },
        {
          answer:
            " Every referral is tracked automatically through our platform. Commission is calculated transparently and paid promptly, with no need to chase invoices or payments.",
          question: "How is my commission tracked and paid?",
        },
        {
          answer:
            "Houzecheck is rated Excellent on Trustpilot (4.8/5) with 1,000+ 5-star reviews. With over 30,000 surveys completed and a 48-hour average turnaround, your clients will receive fast, reliable, and customer-focused service.",
          question: "How do I know my clients will be looked after?",
        },
        {
          answer:
            "Because we make it effortless. With nationwide surveyor coverage, cutting-edge technology, and a proven reputation, partnering with Houzecheck means you can offer premium surveying services with zero hassle, strengthening your client relationships and your brand.  Look carefully at many of the websites offering survey quotes- unlike Houzecheck, most don’t have their own surveying network- and consequently service is variable dependent on their ability to find a surveyor, each time.",
          question:
            "Why should I partner with Houzecheck instead of another provider?",
        },
      ],
      title: "Frequently Asked Questions",
    },
  },
  url: "/partner",
};

export const PARTNER_FORM_EVENT = "partner-signup-form";
