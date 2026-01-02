import { HCCOMPARISON_DEFAULT_CONTENT } from "@/components/HCComparison/constants";
import type { SurveyorPageData } from "./types";

// TODO: Similar to HCComparison we can have all component specific content in their own
// constants and import them here
export const DEFAULT_SURVEYOR_PAGE_DATA: SurveyorPageData = {
  surveyorData: {
    hero: {
      eyebrow: "SURVEYORS",
      title:
        "We're hiring at the UK's fastest-growing network of RICS Surveyors.",
      subtitle:
        "We handle the admin so you can focus on the job you and the freedom it brings.",
      image: "/assets/images/surveyorpghero.webp",
      ricsLogo: "/assets/images/rics-logo-whitebg.webp",
      button: {
        label: "Apply today",
        url: "/",
        backgroundColor: "#F7DE8C",
        textColor: "#1F1801",
        icon: "MdArrowOutward",
      },
    },
    hcPerks: {
      eyebrow: "Perks",
      title: "What are the Houzecheck Surveyor Perks?",
      subtitle:
        "We have a range of perks you can take advantage of when you join our network!",
      perks: [
        {
          title: {
            value: "Tech",
            textColor: "#1F1801",
          },
          subtitle: {
            value:
              "Work smarter, not harder. Our platform handles bookings, payments, and updates seamlessly—so you can focus on surveying, not software",
            textColor: "#616061",
          },
          backgroundImage: "/assets/images/perk1.webp",
          contentPosition: "top",
        },
        {
          title: {
            value: "Zero Admin",
            textColor: "#F7DE8C",
          },
          subtitle: {
            value:
              "No chasing invoices. No endless paperwork. We take care of the admin, so you can get on with what you do best.",
            textColor: "#FFFFFF",
          },
          backgroundImage: "/assets/images/perk2.webp",
          contentPosition: "center",
        },
        {
          title: {
            value: "Community",
            textColor: "#1F1801",
          },
          subtitle: {
            value:
              "Join a network of trusted RICS professionals. Share knowledge, grow together, and be part of a community that has your back.",
            textColor: "#616061",
          },
          backgroundImage: "/assets/images/perk3.webp",
          contentPosition: "top",
        },
        {
          title: {
            value: "No Targets, More Freedom",
            textColor: "#F7DE8C",
          },
          subtitle: {
            value:
              "You set your pace. Work fewer hours, ditch the sales pressure, and enjoy a career that fits your lifestyle.",
            textColor: "#FFFFFF",
          },
          backgroundImage: "/assets/images/perk4.webp",
          contentPosition: "center",
        },
        {
          title: {
            value: "Customer Support",
            textColor: "#1F1801",
          },
          subtitle: {
            value:
              "Got a question? We're only ever a call or WhatsApp away. Real people, ready to help whenever you need it.",
            textColor: "#616061",
          },
          backgroundImage: "/assets/images/perk5.webp",
          contentPosition: "bottom",
        },
        {
          title: {
            value: "Marketing",
            textColor: "#F7DE8C",
          },
          subtitle: {
            value:
              "You set your pace. Work fewer hours, ditch the sales pressure, and enjoy a career that fits your lifestyle.",
            textColor: "#FFFFFF",
          },
          backgroundImage: "/assets/images/perk6.webp",
          contentPosition: "center",
        },
      ],
    },
    surveyorsQuiz: {
      backgroundColor: "#1F1801",
      doneSlide: {
        primaryBtn: {
          label: "Book a Survey",
          rightIcon: "MdArrowOutward",
          url: "/book",
          variant: "ghost",
        },
        secondaryBtn: {
          label: "Learn more",
          variant: "ghost",
        },
        subheading:
          "Now you’re in the know, you can make a more informed decision.",
        title: "You’re all done!",
      },
      eyebrow: "HOUZECHECK SURVEYORS",
      noBtn: {
        label: "",
      },
      quiz: {
        eyebrow: "QUICK QUIZ",
        nextBtn: {
          label: "Next",
          rightIcon: "MdArrowForward",
          variant: "default",
        },
        previousBtn: {
          label: "Previous",
          leftIcon: "MdArrowBack",
          variant: "ghost",
        },
        questions: [
          {
            answer: "first_time_buyers",
            options: [
              {
                label: "First time buyers",
                value: "first_time_buyers",
              },
              {
                label: "New builds",
                value: "new_builds",
              },
            ],
            question: "A RICS Level 2 Survey is good for...",
          },
          {
            answer: "first_time_buyers",
            options: [
              {
                label: "First time buyers",
                value: "first_time_buyers",
              },
              {
                label: "New builds",
                value: "new_builds",
              },
            ],
            question: "A RICS Level 2 Survey is not good for...",
          },
        ],
        subheading: "Excellent, let’s test you!",
        title: "Do you know what a RICS level 2 survey is?",
      },
      title: "Are you a match?",
      yesBtn: {
        label: "Take the quiz",
        rightIcon: "MdArrowOutward",
        variant: "default",
      },
    },
    newsAndUpdate: {
      eyebrow: "The Latest",
      title: "News & Updates",
      subtitle: "Check out the latest news and events from Houzecheck HQ.",
      news: [
        {
          eyebrow: "New Surveyor",
          title: "Welcome Damien George (AssocRICS)",
          subtitle:
            "We're thrilled to officially welcome Damien George (AssocRICS) to the Houzecheck network!",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fcf4d4eed380a462aa14ccdacc422ef11",
          button: {
            label: "Read more",
            url: "/",
            rightIcon: "MdArrowForward",
            variant: "default",
          },
        },
        {
          eyebrow: "INSIGHTS",
          title: "Our Secret Sauce",
          subtitle: "(...not so secret anymore)",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F92cce2331d4a466d93eee4e90cbb9f34",
          button: {
            label: "Read more",
            url: "/",
            rightIcon: "MdArrowForward",
            variant: "default",
          },
        },
      ],
    },
    compareHouzecheck: HCCOMPARISON_DEFAULT_CONTENT,
    meetPeople: {
      eyebrow: "SURVEYORS",
      name: "Adrian",
      paragraph:
        "<p>With over 25 years of industry experience, Adrian leads our surveyor network with deep technical expertise and a genuine passion for supporting fellow professionals.</p><p>At Houzecheck, our surveyors aren't just contractors—they're the core of everything we do. We're building a national network rooted in trust, collaboration, and mutual success.</p><p>When you join, you're not just getting jobs - you're joining a team that's got your back.</p>",
      photo: "/assets/images/adrian-profile.webp",
      signature: "/assets/images/signature.webp",
      subTitle:
        "Here’s a short note from our Head of Surveying, Adrian Hall about level 2 surveys",
      title: "A note from our Director of Surveying",
    },
    offerBanner: {
      backgroundImage: "/assets/images/offer-section.webp",
      button: {
        label: "Click for offer",
        url: "/",
        variant: "default",
      },
      extraText: {
        color: "#FFFFFF",
        text: "*Disclaimer lives here",
      },
      eyebrow: {
        color: "#F39E8A",
        text: "OFFERS",
      },
      subtitle: {
        color: "#FFFFFF",
        text: "Join in December for an exclusive ££ sign-on bonus.",
      },
      title: {
        color: "#FFFBED",
        size: "lg",
        text: "December Offer",
      },
    },
    meetSurveyingDirectorVideo: {
      backgroundImage: "/assets/images/meet-surveying-director.webp",
      eyebrow: "SURVEYOR PROFILES",
      subtitle: "Meet our Director of Surveying.",
      title: "Meet Adrian",
      video: {
        button: {
          label: "Watch Video",
          leftIcon: "MdPlayCircleOutline",
          variant: "default",
        },
        title: "Watch Video",
      },
    },
    journeyToBeingIndependent: {
      sectionHeader: {
        eyebrow: {
          color: "#F39E8A",
          text: "EXPLAINER VIDEOS",
        },
        subheading: {
          color: "#616061",
          text: "4 steps to independence explained by our surveyors",
        },
        title: {
          color: "#1F1801",
          text: "The Journey To Being Independent",
        },
      },
      steps: [
        {
          step: {
            eyebrow: {
              color: "#F39E8A",
              text: "STEP 1",
            },
            subheading: {
              color: "#616061",
              text: "The first step helps you understand where your journey begins and what independence truly means.",
            },
            title: {
              color: "#1F1801",
              text: "Understanding the Foundation",
            },
          },
        },
        {
          step: {
            eyebrow: {
              color: "#F39E8A",
              text: "STEP 2",
            },
            subheading: {
              color: "#616061",
              text: "This step offers clarity on how the process moves forward, with practical insight you can rely on.",
            },
            title: {
              color: "#1F1801",
              text: "Breaking Down the Process",
            },
          },
        },
        {
          step: {
            eyebrow: {
              color: "#F39E8A",
              text: "STEP 3",
            },
            subheading: {
              color: "#616061",
              text: "Here, you get a clear view of what lies ahead, keeping you informed and confident throughout your journey.",
            },
            title: {
              color: "#1F1801",
              text: "Knowing What to Expect",
            },
          },
        },
        {
          step: {
            eyebrow: {
              color: "#F39E8A",
              text: "STEP 4",
            },
            subheading: {
              color: "#616061",
              text: "The final step gives you a complete understanding of the path to independence and how everything connects.",
            },
            title: {
              color: "#1F1801",
              text: "Bringing It All Together",
            },
          },
        },
      ],
    },
    surveyorBenefits: {
      backgroundColor: "#1F1801",
      eyebrow: {
        text: "Jobs",
        color: "#F39E8A",
      },
      title: {
        text: "Benefits",
        color: "#FFFBED",
      },
      subtitle: {
        text: "Explore the benefits of working with us",
        color: "#FFFFFF",
      },
      cta: {
        label: "Sign up now",
        href: "/surveyor/signup",
      },
      cards: [
        {
          title: "Full-Time Employee",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fa9655189b5ba486cac3694d8948dcf7e",
          textAlign: "center",
          textList: [
            {
              title:
                "<p>Take control of your workload with jobs that fit your schedule</p>",
            },
            {
              title: "<p>No chasing clients or payments - we handle it all</p>",
            },
            {
              title:
                "<p>Keep your independence while plugging into our support network</p>",
            },
            {
              title:
                "<p>Boost your visibility without lifting a finger on marketing</p>",
            },
            {
              title:
                "<p>Be part of a trusted community of RICS professionals</p>",
            },
          ],
          button: {
            label: "Benefits",
            variant: "default",
          },
        },
        {
          title: "Self-Employed",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F3d17db0148a04528b3773cfb67cb246e",
          textAlign: "center",
          textList: [
            {
              title:
                "<p>Take control of your workload with jobs that fit your schedule</p>",
            },
            {
              title: "<p>No chasing clients or payments - we handle it all</p>",
            },
            {
              title:
                "<p>Keep your independence while plugging into our support network</p>",
            },
            {
              title:
                "<p>Boost your visibility without lifting a finger on marketing</p>",
            },
            {
              title:
                "<p>Be part of a trusted community of RICS professionals</p>",
            },
          ],
          button: {
            label: "Benefits",
            variant: "default",
          },
        },
        {
          title: "Part-Time Surveyor",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F656306c083f6409fbcae93c375c63f75",
          textAlign: "center",
          textList: [
            {
              title:
                "<p>Take control of your workload with jobs that fit your schedule</p>",
            },
            {
              title: "<p>No chasing clients or payments - we handle it all</p>",
            },
            {
              title:
                "<p>Keep your independence while plugging into our support network</p>",
            },
            {
              title:
                "<p>Boost your visibility without lifting a finger on marketing</p>",
            },
            {
              title:
                "<p>Be part of a trusted community of RICS professionals</p>",
            },
          ],
          button: {
            label: "Benefits",
            variant: "default",
          },
        },
        {
          title: "Retiring Surveyor",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F75eef1e115ac47aa8a62b86f8c2cf9db",
          textAlign: "center",
          textList: [
            {
              title:
                "<p>Take control of your workload with jobs that fit your schedule</p>",
            },
            {
              title: "<p>No chasing clients or payments - we handle it all</p>",
            },
            {
              title:
                "<p>Keep your independence while plugging into our support network</p>",
            },
            {
              title:
                "<p>Boost your visibility without lifting a finger on marketing</p>",
            },
            {
              title:
                "<p>Be part of a trusted community of RICS professionals</p>",
            },
          ],
          button: {
            label: "Benefits",
            variant: "default",
          },
        },
      ],
    },
    surveyorProfiles: {
      backgroundColor: "#FFFFFF",
      eyebrow: {
        text: "Surveyor profiles",
        color: "#F39E8A",
      },
      title: {
        text: "Hear From Our Surveyors",
        color: "#1F1801",
      },
      subtitle: {
        text: "Check out a selection of our customer reviews.",
        color: "#616061",
      },
      cards: [
        {
          eyebrow: "SURVEYOR PROFILE",
          title: "Abdi Ahmed",
          subtitle: "MSc AssocRICS, RICS Registered Valuer",
          textAlign: "left",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F65adbc21b1494dfb91acb47ade4841b3?format=webp",
          textList: [
            {
              title:
                '<p><span style="font-size: 16px;">My experience collaborating with Houzecheck as a consultant residential surveyor has been exceptionally positive. From the outset, their team has demonstrated remarkable professionalism and a genuine commitment to fostering a strong partnership. The communication is consistently clear and efficient, making the entire survey process smooth and straightforward.</span></p><p><br></p><p><span style="font-size: 16px;">What I particularly value is their organised approach and their dedication to providing all necessary information promptly. This allows me to focus on delivering thorough and accurate surveys, confident that I have the full support of the Houzecheck team. They truly understand the nuances of residential surveying and appreciate the value of a meticulous report for their clients.</span></p><p><br></p><p><span style="font-size: 16px;">I highly recommend working with Houzecheck if you\'re a surveyor looking for a reliable, supportive, and well-organised partner.</span></p>',
            },
          ],
          button: {
            label: "Read Review",
            variant: "ghost",
          },
        },
        {
          eyebrow: "SURVEYOR PROFILE",
          title: "David Bluck",
          subtitle: "AssocRICS",
          textAlign: "left",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F1a7735a406804d41a7605bfdf947dc14?format=webp",
          textList: [
            {
              title:
                '<p><span style="font-size: 16px;">I joined Houzecheck in September and found the onboarding process really smooth and straight forward. Zoe and the team really helped in getting me set up, as I was new to the consultancy process. Having come from a corporate surveying environment for 8 years previously the whole Houzecheck experience has given me a fresh energy with my work and I\'m already a lot happier professionally and personally as a result. Very flexible, very straightforward. Adrian has helped me from a technical and report writing POV as well. Really easy to talk to and knowledgeable.</span></p>',
            },
          ],
          button: {
            label: "Read Review",
            variant: "ghost",
          },
        },
        {
          eyebrow: "SURVEYOR PROFILE",
          title: "Alaur Choudhury",
          subtitle:
            "AssocRICS MCIOB BDMA Ins Tech, Director / Chartered Construction Manager",
          textAlign: "left",
          image:
            "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fd090e59cefbf46ea8a8f52da4a1c3ecb?format=webp",
          textList: [
            {
              title:
                '<p><span style="font-size: 16px;">Working with Houzecheck has been an incredibly rewarding experience for me and my business. Their flexibility and collaborative approach have not only made my day to day operations smoother but it has also allowed me to maintain a healthy balance between delivering quality work and managing other aspects of my business.</span></p><p><br></p><p><span style="font-size: 16px;">What truly sets them apart is their genuine investment in my success. By actively helping to procure new customers, they\'ve played a pivotal role in the growth of my business. It\'s rare to find a client who not only values your work but also champions your development.</span></p><p><br></p><p><span style="font-size: 16px;">I\'m genuinely grateful for the partnership and look forward to continuing to build something great together.</span></p>',
            },
          ],
          button: {
            label: "Read Review",
            variant: "ghost",
          },
        },
      ],
    },
    techSecretSauce: {
      description:
        "SurveyFast – Available and access Everywhere (iOS, Android, and any web browser)",
      eyebrow: "SURVEY PASS",
      tabs: [
        {
          description:
            "Select inspection options and SurveyFast automatically generates professional, structured sentences for your report—cutting writing time by up to two-thirds.",
          iconUrl: "/assets/icons/tech-ss1.svg",
          image: "/assets/images/surveyor/tech-ss1.webp",
          label: "Smart Auto Report Writing (Save 60–70% Time)",
          title: "Why this is important:",
        },
        {
          description:
            "Capture photos directly in the app and instantly annotate them with highlights, shapes, text, and cropping - no external tools needed.",
          iconUrl: "/assets/icons/tech-ss2.svg",
          image: "/assets/images/surveyor/tech-ss2.webp",
          label: "Built-in Camera & Image Editor",
          title: "Why this is important:",
        },
        {
          description:
            "Generate fully compliant RICS-format reports with one click - ready for client delivery and professional audits.",
          iconUrl: "/assets/icons/tech-ss3.svg",
          image: "/assets/images/surveyor/tech-ss3.webp",
          label: "RICS-Standard, Ready-to-Send Reports",
          title: "Why this is important:",
        },
        {
          description:
            "Create jobs in seconds and automatically send email updates when reports are signed off - zero admin chasing.",
          iconUrl: "/assets/icons/tech-ss4.svg",
          image: "/assets/images/surveyor/tech-ss4.webp",
          label: "2-Step Job Creation + Automated Client Emails",
          title: "Why this is important:",
        },
        {
          description:
            "Manage survey bookings, availability, and workload in one live calendar - no double bookings, no confusion.",
          iconUrl: "/assets/icons/tech-ss5.svg",
          image: "/assets/images/surveyor/tech-ss5.webp",
          label: "Integrated Booking Calendar",
          title: "Why this is important:",
        },
        {
          description:
            "All reports and images are saved securely in the cloud, with exportable job data to track how many surveys were completed in any time period.",
          iconUrl: "/assets/icons/tech-ss6.svg",
          image: "/assets/images/surveyor/tech-ss6.webp",
          label: "Cloud-Based Secure Storage & Performance Reporting",
          title: "Why this is important:",
        },
        {
          description:
            "Includes inbuilt SCT valuation tools and supports all standard survey job types - plus a dedicated technical support team always available to help.",
          iconUrl: "/assets/icons/tech-ss7.svg",
          image: "/assets/images/surveyor/tech-ss7.webp",
          label: "Valuation Tools + All Job Types Built In",
          title: "Why this is important:",
        },
        {
          description:
            "Carry out full inspections, capture images, edit reports and save data even with zero network. Everything syncs automatically when you’re back online.",
          iconUrl: "/assets/icons/tech-ss8.svg",
          image: "/assets/images/surveyor/tech-ss8.webp",
          label: "Offline-First Design – Work Without Internet",
          title: "Why this is important:",
        },
        {
          description:
            "Prevents overwrites when multiple edits occur before reconnection.",
          iconUrl: "/assets/icons/tech-ss9.svg",
          image: "/assets/images/surveyor/tech-ss9.webp",
          label: "Conflict-Free Smart Sync",
          title: "Why this is important:",
        },
      ],
      title: "Explore Houzecheck Tech Secret Sauce",
    },
    faqs: {
      description:
        '<p>\n  <span style="font-size: 14px;">Find answers to commonly asked questions and if you still have questions, you can </span\n  ><a href="/about-us" rel="noopener noreferrer" style="font-size: 14px;"\n    ><strong><u>email</u></strong></a\n  ><span style="font-size: 14px;"> us or give us a </span\n  ><a href="/about-us" rel="noopener noreferrer" style="font-size: 14px;"\n    ><strong><u>call</u></strong></a\n  >\n</p>\n',
      eyebrow: "EVERYTHING YOU NEED TO KNOW",
      faq: [
        {
          answer:
            "Qualified RICS residential surveyors who want flexible work and strong earning potential.",
          question: "Who can join Houzecheck as a surveyor?",
        },
        {
          answer:
            "No. You can choose your own hours and days, and work as much or as little as you want.",
          question: "Do I need to work full-time?",
        },
        {
          answer:
            "Yes. Surveyors can work in their preferred postcodes across England and parts of Wales.",
          question: "Can I choose where I work?",
        },
      ],
      title: "Frequently Asked Questions",
    },
  },
  url: "/surveyor",
};

export const SURVEYOR_FORM_EVENT = "surveyor-signup-form";
