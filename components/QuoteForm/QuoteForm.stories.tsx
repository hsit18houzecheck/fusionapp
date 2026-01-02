import type { Meta, StoryObj } from "@storybook/react";
import QuoteForm from "./index";

const meta = {
  title: "Components/QuoteForm",
  component: QuoteForm,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "QuoteForm component displayed in a side sheet with form validation using Formik and Yup. Includes survey type selection, property postcode, phone number, email, and name fields with real-time validation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      description: "Controls whether the sheet is open or closed",
      control: "boolean",
    },
    onOpenChange: {
      description: "Callback function when sheet open state changes",
      action: "onOpenChange",
    },
    data: {
      description: "Form configuration data from CMS",
      control: "object",
    },
  },
} satisfies Meta<typeof QuoteForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultData = {
  logo: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2Fe753c95d47be4bce998d3bf8a7df4863",
  eyebrow: {
    text: "QUICK QUIZ",
    color: "#616061",
  },
  title: {
    text: "Do you know what a RICS level 2 survey is?",
    color: "#1F1801",
  },
  subtitle: {
    text: "Excellent, let's test you!",
    color: "#616061",
  },
  surveyTypeField: {
    label: "Survey Type",
    options: [
      {
        label: "RICS Level 2 Home Survey",
        value: "level-2",
      },
      {
        label: "RICS Level 3 Home Survey",
        value: "level-3",
      },
      {
        label: "Valuation",
        value: "valuation",
      },
    ],
  },
  propertyPostcode: {
    label: "Property's Postcode*",
    placeholder: "AB12 3CD",
  },
  phoneNumber: {
    label: "Your Phone Number*",
    placeholder: "07123456789",
  },
  email: {
    label: "Your Email Address*",
    placeholder: "name@yourprovider.com",
  },
  name: {
    label: "Your Full Name*",
    placeholder: "Jane Smith",
  },
  button: {
    label: "Get my FREE quote",
    icon: "https://cdn.builder.io/api/v1/image/assets%2F8b45d942b714482385ebbe227c2edd75%2F7b8b324008f345ad83c5352f8e2e0a61",
  },
};

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    data: defaultData,
  },
};

export const WithoutLogo: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    data: {
      ...defaultData,
      logo: undefined,
    },
  },
};

export const MinimalLabels: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    data: {
      ...defaultData,
      eyebrow: undefined,
      subtitle: undefined,
      title: {
        text: "Get Your Free Quote",
        color: "#1F1801",
      },
    },
  },
};

export const CustomColors: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    data: {
      ...defaultData,
      eyebrow: {
        text: "CUSTOM COLORS",
        color: "#F39E8A",
      },
      title: {
        text: "Request Your Survey Quote",
        color: "#1F1801",
      },
      subtitle: {
        text: "Fill out the form below to get started",
        color: "#616061",
      },
    },
  },
};

export const DifferentSurveyOptions: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    data: {
      ...defaultData,
      surveyTypeField: {
        label: "Select Service Type",
        options: [
          {
            label: "Building Survey",
            value: "building",
          },
          {
            label: "Homebuyer Report",
            value: "homebuyer",
          },
          {
            label: "Condition Report",
            value: "condition",
          },
          {
            label: "Specialist Survey",
            value: "specialist",
          },
        ],
      },
    },
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onOpenChange: () => {},
    data: defaultData,
  },
};
