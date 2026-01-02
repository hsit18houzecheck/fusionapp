import type { Meta, StoryObj } from "@storybook/react";
import FAQClient from "./Client";
import { DEFAULT_FAQ_CONTENT } from "./constants";

const meta: Meta<typeof FAQClient> = {
  title: "Components/FAQ",
  component: FAQClient,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FAQClient>;

export const Default: Story = {
  args: {
    ...DEFAULT_FAQ_CONTENT,
  },
};

export const CustomContent: Story = {
  args: {
    eyebrow: "GOT QUESTIONS?",
    title: "Help Center",
    description: '<p>Browse our frequently asked questions. Need more help? Contact us via <a href="https://wa.me/123456789" rel="noopener noreferrer" target="_blank">WhatsApp</a> or give us a call</p>',
    faq: [
      {
        question: "How much does a survey cost?",
        answer: "Survey costs vary depending on the property value, location, and type of survey required. Get an instant quote by entering your property details on our homepage.",
      },
      {
        question: "What areas do you cover?",
        answer: "We have RICS-qualified surveyors covering all of England, Scotland, and Wales. Simply enter your postcode to find available surveyors in your area.",
      },
      {
        question: "Can I choose my surveyor?",
        answer: "Yes! We'll show you profiles of available RICS-qualified surveyors in your area, and you can choose the one that best fits your needs.",
      },
    ],
  },
};

export const MinimalFAQs: Story = {
  args: {
    eyebrow: "QUICK HELP",
    title: "Common Questions",
    description: '<p>Find quick answers below or reach out to our team on <a href="https://wa.me/123456789" rel="noopener noreferrer" target="_blank">WhatsApp</a></p>',
    faq: [
      {
        question: "What is included in the report?",
        answer: "Our comprehensive reports include detailed assessments of the property's condition, structural integrity, damp and timber issues, and recommendations for any necessary repairs.",
      },
      {
        question: "Do you offer same-day surveys?",
        answer: "While we typically schedule surveys within 48 hours, same-day appointments may be available depending on surveyor availability in your area. Contact us to check availability.",
      },
    ],
  },
};

export const WithComplexHTML: Story = {
  args: {
    eyebrow: "EVERYTHING YOU NEED TO KNOW",
    title: "Frequently Asked Questions",
    description: '<p>Find answers to commonly asked questions and if you still have questions, you can chat to us on <a href="https://google.com" rel="noopener noreferrer" target="_blank">WhatsApp</a> or give us a call</p>',
    faq: DEFAULT_FAQ_CONTENT.faq,
  },
};
