"use client";
import Container from "./components/Container";
import Field from "./components/Field";
import FieldsErr from "./components/FieldsErr";
import FormSubmitButtons from "./components/FormSubmitButtons";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import JobTypeSurvey from "./JobTypeSurvey";
import JobTypeValuation from "./JobTypeValuation";
import {
  commonFieldErr,
  fieldLabels,
  allConstantVals,
  bedrooms,
  jobType,
  propertyType,
} from "./constants";
import * as Yup from "yup";
import { useSearchParams } from "next/navigation";
import useLeadStore from "@/store/oldWebsite/useLeadStore";
import type { ProductData } from "@/store/oldWebsite/useLeadStore";
import { useGetAddresses } from "@/hooks/useMiscApi";
import { useShowLead, useUpdateLead } from "./hooks/useLeadApi";
import { toast } from "@/components/ui/sonner";

type LeadFormValues = {
  job_type: string;
  survey_type: string;
  other_service: string;
  build_year_l2: string;
  property_postcode: string;
  property_address: string;
  non_standard_prop: string;
  had_alter_in_prop: string;
  had_prop_extented: string;
  plan_alter_in_prop: string;
  is_prop_condtn_poor: string;
  bedrooms: string;
  property_type: string;
  val_reason: string;
  specific_reason: string;
  val_for_lending: string;
  requirement_expert_witness: string;
};

const Product = () => {
  const searchParams = useSearchParams();
  const interaction_id = searchParams.get("interaction_id");
  const { isLoading } = useShowLead(interaction_id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const {
    valuationJobType,
    surveyJobType,
    otherJobType,
    help_to_buy,
    shared_ownership,
    market_valuation,
    any_other_reason,
    no,
    i_dont_know,
    stage_lead_scoring,
  } = allConstantVals;

  const leadData = useLeadStore((state) => state);

  const { mutate: updateLead } = useUpdateLead();

  const productData = leadData.productData as ProductData;

  const {
    data: { data: { addresses: addressList } } = {
      data: { addresses: [] as string[] },
    },
    isLoading: loadingAddress,
  } = useGetAddresses(productData?.property_postcode ?? "");

  const initialValues: LeadFormValues = {
    job_type: productData?.job_type || "",
    survey_type: productData?.survey_type || "",
    other_service: productData.other_service || "",
    build_year_l2: productData?.build_year_l2 || "",
    property_postcode: productData?.property_postcode || "",
    property_address: productData?.property_address || "",
    non_standard_prop: productData?.non_standard_prop || "",
    had_alter_in_prop: productData?.had_alter_in_prop || "",
    had_prop_extented: productData?.had_prop_extented || "",
    plan_alter_in_prop: productData?.plan_alter_in_prop || "",
    is_prop_condtn_poor: productData?.is_prop_condtn_poor || "",
    bedrooms: productData?.bedrooms || "",
    property_type: productData?.property_type || "",
    // Valuation fields
    val_reason: productData?.val_reason || "",
    specific_reason: productData?.specific_reason || "",
    val_for_lending: productData?.val_for_lending || "",
    requirement_expert_witness: productData?.requirement_expert_witness || "",
  };

  const validationSchema = Yup.object({
    job_type: Yup.string().required(commonFieldErr),
    property_address: Yup.string().required(commonFieldErr),
    bedrooms: Yup.string().required(commonFieldErr),
    property_type: Yup.string().required(commonFieldErr),
  })
    .shape({
      survey_type: Yup.string().when("job_type", {
        is: surveyJobType.value,
        then: () => Yup.string().required(commonFieldErr).default(""),
      }),
      // build_year_l2: Yup.string().when(['job_type', 'survey_type'], {
      //   is: (job_type, survey_type) =>
      //     job_type === surveyJobType.value && survey_type === level2Name.value,
      //   then: Yup.string().required(commonFieldErr).default('')
      // }),
      // non_standard_prop: Yup.string().when(['job_type', 'survey_type'], {
      //   is: (job_type, survey_type) =>
      //     job_type === surveyJobType.value && survey_type === level2Name.value,
      //   then: Yup.string().required(commonFieldErr).default('')
      // }),
      // had_alter_in_prop: Yup.string().when(['job_type', 'survey_type'], {
      //   is: (job_type, survey_type) =>
      //     job_type === surveyJobType.value && survey_type === level2Name.value,
      //   then: Yup.string().required(commonFieldErr).default('')
      // }),
      // had_prop_extented: Yup.string().when(['job_type', 'survey_type'], {
      //   is: (job_type, survey_type) =>
      //     job_type === surveyJobType.value && survey_type === level2Name.value,
      //   then: Yup.string().required(commonFieldErr).default('')
      // }),
      // plan_alter_in_prop: Yup.string().when(['job_type', 'survey_type'], {
      //   is: (job_type, survey_type) =>
      //     job_type === surveyJobType.value && survey_type === level2Name.value,
      //   then: Yup.string().required(commonFieldErr).default('')
      // }),
      // is_prop_condtn_poor: Yup.string().when(['job_type', 'survey_type'], {
      //   is: (job_type, survey_type) =>
      //     job_type === surveyJobType.value && survey_type === level2Name.value,
      //   then: Yup.string().required(commonFieldErr).default('')
      // })
    })
    .shape({
      val_reason: Yup.string().when("job_type", {
        is: valuationJobType.value,
        then: () => Yup.string().required(commonFieldErr).default(""),
      }),
      specific_reason: Yup.string().when(["job_type", "val_reason"], {
        is: (job_type: string, val_reason: string) =>
          job_type === valuationJobType.value &&
          (val_reason === help_to_buy.value ||
            val_reason === shared_ownership.value),
        then: () => Yup.string().required(commonFieldErr).default(""),
      }),
      val_for_lending: Yup.string().when(["job_type", "val_reason"], {
        is: (job_type: string, val_reason: string) =>
          job_type === valuationJobType.value &&
          (val_reason === market_valuation.value ||
            val_reason === any_other_reason.value),
        then: () => Yup.string().required(commonFieldErr),
      }),
      requirement_expert_witness: Yup.string().when(
        ["job_type", "val_for_lending", "val_reason"],
        {
          is: (job_type: string, val_for_lending: string, val_reason: string) =>
            job_type === valuationJobType.value &&
            (val_reason === market_valuation.value ||
              val_reason === any_other_reason.value) &&
            (val_for_lending === no.value ||
              val_for_lending === i_dont_know.value),
          then: () => Yup.string().required(commonFieldErr),
        }
      ),
    })
    .shape({
      other_service: Yup.string().when("job_type", {
        is: otherJobType.value,
        then: () => Yup.string().required(commonFieldErr).default(""),
      }),
    });

  // Consume addressList directly from the query to avoid update loops

  const onSubmit = async (values: LeadFormValues) => {
    console.log(values);
    const interactionId =
      ((leadData.leadDetail as any)?.interaction_id as string | undefined) ??
      interaction_id ??
      "";
    switch (values.job_type) {
      case valuationJobType.value:
        updateLead({
          leadDetail: { interaction_id: interactionId },
          productData: {
            ...(productData as ProductData),
            ...values,
            channel: "houzecheck lead",
            web_stage: stage_lead_scoring.value,
            currentStep: 8,
          },
        });
        break;
      case surveyJobType.value: {
        updateLead({
          leadDetail: { interaction_id: interactionId },
          productData: {
            ...(productData as ProductData),
            ...values,
            channel: "houzecheck lead",
            web_stage: stage_lead_scoring.value,
            currentStep: 8,
          },
        });
        break;
      }
      case otherJobType.value:
        if (values.other_service) {
          updateLead({
            leadDetail: { interaction_id: interactionId },
            productData: {
              ...(productData as ProductData),
              ...values,
              channel: "houzecheck lead",
              web_stage: stage_lead_scoring.value,
              currentStep: 8,
            },
          });
        } else {
          toast.error("Please explain or select the type other service");
        }
        break;
      default:
        break;
    }
  };

  // Function to replace multiple commas with a single comma
  const replaceMultipleCommas = (address: string) => {
    return address.replace(/(,\s*)+/g, ", ");
  };

  // Function to convert addresses to array of JSON objects
  const convertAddressesToJson = (
    addresses: string[]
  ): { label: string; value: string }[] => {
    return addresses.map((address: string) => {
      const cleanedAddress = replaceMultipleCommas(address);
      return {
        label: cleanedAddress,
        value: cleanedAddress,
      };
    });
  };

  if (!mounted) return null;
  return (
    <Container isLoading={isLoading || loadingAddress} goBack={false}>
      <p className="font-bold text-4xl">
        Hello{" "}
        <span
          dangerouslySetInnerHTML={{
            __html:
              ((leadData.leadDetail as any)?.data?.first_name as string) || "",
          }}
        ></span>
        ,
      </p>
      <p className="mb-6">
        So we can provide you with the best service, we need a little more
        information from you.
      </p>
      <Formik<LeadFormValues>
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <Form id="lead-form">
            <Field
              id="job_type"
              controlType="radio"
              label={fieldLabels.job_type}
              name="job_type"
              optionVals={jobType}
              radioType="type1"
            />
            {values.job_type === otherJobType.value ? (
              <Field
                id="other_service"
                controlType="textarea"
                label={fieldLabels.other_service}
                name="other_service"
              />
            ) : (
              <>
                {values.job_type === surveyJobType.value && (
                  <JobTypeSurvey
                    surveyTypeFormVals={values}
                    fieldLabels={fieldLabels}
                  />
                )}
                {values.job_type === valuationJobType.value && (
                  <JobTypeValuation
                    formVals={values}
                    fieldLabels={fieldLabels}
                  />
                )}
              </>
            )}
            <div className="flex flex-col md:flex-row">
              <Field
                id="property_postcode"
                type="text"
                controlType="input"
                name="property_postcode"
                disabled
                label={fieldLabels.property_postcode}
                value={productData.property_postcode}
              />
              <Field
                id="property_address"
                controlType="dropdown"
                name="property_address"
                dropdownType="type2"
                optionVals={[
                  { label: "Select Address", value: "", key: "select-address" },
                  ...convertAddressesToJson(addressList).map((item, index) => ({
                    ...item,
                    key: String(index),
                  })),
                ]}
                label={fieldLabels.property_address}
              />
            </div>
            <Field
              id="property_type"
              controlType="dropdown"
              name="property_type"
              label={fieldLabels.property_type}
              dropdownType="type1"
              optionVals={propertyType}
            />
            <Field
              id="bedrooms"
              controlType="dropdown"
              name="bedrooms"
              label={fieldLabels.bedrooms}
              dropdownType="type1"
              small={true}
              optionVals={bedrooms}
            />
            <FieldsErr
              fieldLabels={fieldLabels}
              errors={errors}
              touched={touched}
            />
            <FormSubmitButtons goBack={true} />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Product;
