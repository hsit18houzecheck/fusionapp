import { FAQContent } from "./types";

export const DEFAULT_FAQ_CONTENT: FAQContent = {
  eyebrow: "EVERYTHING YOU NEED TO KNOW",
  title: "Frequently Asked Questions",
  description: '<p>Find answers to commonly asked questions and if you still have questions, you can chat to us on <a href="https://wa.me/your-number" rel="noopener noreferrer" target="_blank">WhatsApp</a> or give us a call</p>',
  faq: [
    {
      question: "What's the difference between a Level 2 and Level 3?",
      answer: "A Level 2 survey (HomeBuyer Report) is suitable for conventional properties in reasonable condition, providing an overview of the property's condition. A Level 3 survey (Building Survey) is more comprehensive and detailed, recommended for older properties, those in poor condition, or if you're planning major works.",
    },
    {
      question: "What happens if my survey finds issues?",
      answer: "When a potential homebuyer discovers an issue revealed by a qualified RICS surveyor's detailed condition survey report, they may need to negotiate repairs or reconsider their offer based on the findings.",
    },
    {
      question: "How quickly can I book?",
      answer: "You can book a survey online in just a few minutes. Most surveys can be scheduled within 48 hours, and you'll receive your comprehensive report within 3-5 working days of the inspection.",
    },
    {
      question: "Are your surveyors insured?",
      answer: "Yes, all our surveyors are fully qualified RICS professionals with comprehensive professional indemnity insurance. They have extensive experience and follow strict industry standards to provide you with accurate, reliable reports.",
    },
  ],
};
