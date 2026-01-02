import type { CaseStudyContent, CaseStudy } from "./types";

export const DEFAULT_CASE_STUDY_CONTENT: CaseStudyContent = {
  eyebrow: "CASE STUDIES",
  title: "Survey Case Studies",
  subtitle:
    "Real examples of how our HomeBuyer Reports helped clients identify issues and negotiate better prices.",
};

export const DEFAULT_CASE_STUDIES: CaseStudy[] = [
  {
    title: "The Hidden Damp Issue - £8,000 Negotiated Discount",
    row1: [
      {
        title: "Property Type",
        subtitle: "1970s Bungalow",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Ff5ee9367b8c2466487917d112211392a",
      },
      {
        title: "Survey Type",
        subtitle: "Level 2 HomeBuyer Survey",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Ffaa071ea61ca43529af97119db0a37fd",
      },
      {
        title: "Issue Found",
        subtitle: "Rising damp and old electrics",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F40ea01b08eee408e827c4800551ed0a6",
      },
      {
        title: "Outcome",
        subtitle: "£8,000 discount secured",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fec30c07c32394d67b836d9652c6ef19d",
      },
    ],
    row2: {
      title: "Scenario",
      subtitle:
        "A couple purchasing a 1970s bungalow was advised by their estate agent that the home was \"move-in ready.\" Wanting peace of mind, they booked a HomeBuyer Report, which revealed rising damp in two rooms and outdated electrical wiring not up to modern safety standards. The estimated cost to remedy both issues was £8,000.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F9dded8f0c7a84573bc85acc55a11a46c",
    },
    row3: {
      title: "Result",
      subtitle:
        "The buyers negotiated an £8,000 discount on the purchase price, bringing the cost down to reflect the necessary repairs.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F373707c7d4c74a8f87d7ad47c9893626",
    },
    row4: {
      title: "Key Takeaway",
      subtitle:
        "A HomeBuyer Report helps you factor repair costs into your budget and negotiate a fair price.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F9c5d33d3c5a64227b3488637eb2f693b",
    },
  },
  {
    title: "Structural Movement Discovery - Purchase Withdrawn",
    row1: [
      {
        title: "Property Type",
        subtitle: "Victorian Terrace",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Ff5ee9367b8c2466487917d112211392a",
      },
      {
        title: "Survey Type",
        subtitle: "Level 3 Building Survey",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Ffaa071ea61ca43529af97119db0a37fd",
      },
      {
        title: "Issue Found",
        subtitle: "Significant structural movement",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F40ea01b08eee408e827c4800551ed0a6",
      },
      {
        title: "Outcome",
        subtitle: "Purchase withdrawn, £15,000+ saved",
        icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fec30c07c32394d67b836d9652c6ef19d",
      },
    ],
    row2: {
      title: "Scenario",
      subtitle:
        "A family fell in love with a charming Victorian terrace. Some cracks were visible, but the estate agent assured them these were 'normal settlement'. They commissioned a Level 3 Building Survey for peace of mind.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F9dded8f0c7a84573bc85acc55a11a46c",
    },
    row3: {
      title: "Result",
      subtitle:
        "The survey revealed ongoing structural movement requiring underpinning, with estimated costs exceeding £15,000. The vendor was unwilling to reduce the price or address the issues. The buyers withdrew from the purchase, avoiding a potentially disastrous investment.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F373707c7d4c74a8f87d7ad47c9893626",
    },
    row4: {
      title: "Key Takeaway",
      subtitle:
        "Not all cracks are 'normal settlement'. A detailed survey can save you from purchasing a property with serious structural issues.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F9c5d33d3c5a64227b3488637eb2f693b",
    },
  },
];
