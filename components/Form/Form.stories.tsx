import type { Meta, StoryObj } from "@storybook/react";
import Form from "./index";
import type { FieldConfig } from "./types";
import { createValidationSchemaFromFields } from "./validation";

const meta: Meta<typeof Form> = {
  title: "UI/Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: () => {
    const fields: FieldConfig[] = [
      { type: "select", name: "surveyType", label: "Survey Type*", placeholder: "Select survey type", options: [
        { label: "RICS Level 2", value: "survey.level2" },
        { label: "RICS Level 3", value: "survey.level3" },
      ] },
      { type: "text", name: "propertyPostcode", label: "Property Postcode*", placeholder: "e.g., SW1A 1AA" },
      { type: "tel", name: "phoneNumber", label: "Phone Number*", placeholder: "+44 7700 900123" },
      { type: "email", name: "email", label: "Email*", placeholder: "you@example.com" },
      { type: "text", name: "name", label: "Full Name*", placeholder: "Jane Doe" },
    ];

    const initialValues = {
      surveyType: "",
      propertyPostcode: "",
      phoneNumber: "",
      email: "",
      name: "",
    };

    return (
      <div className="p-6 max-w-md">
        <Form
          initialValues={initialValues}
          fields={fields}
          validationSchema={createValidationSchemaFromFields(fields)}
          onSubmit={(values) => console.log("Submitted:", values)}
          submitButton={{ label: "Get Quote" }}
        />
      </div>
    );
  },
};

