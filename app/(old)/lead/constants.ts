export const fieldLabels = {
  job_type: "Which of the following services do you require?",
  survey_type: "Please confirm which RICS survey do you require?",
  other_service: "Please explain what you are looking for:",
  build_year_l2: "Approximate year of build",
  non_standard_prop:
    "Is the property a standard built i.e. made of brick/stone with a tiled/slate roof",
  had_alter_in_prop:
    "Has the property had any large extensions or major alterations?",
  had_prop_extented: "Has the property been extended more than twice?",
  plan_alter_in_prop: "Are you planning any extensions or major alterations?",
  is_prop_condtn_poor: "Does the property need major repairs?",
  property_postcode: "Property Postcode",
  property_address: "Property Address",
  bedrooms: "Number of bedrooms as listed",
  property_type: "Property type",
  // Valuation fields
  val_reason: "Please confirm the reason for the RICS Valuation?",
  specific_reason: "Please confirm specific reason:",
  val_for_lending: "Is the valuation required for lending purposes?",
  requirement_expert_witness:
    "Is there a requirement to appear as expert witness?",
};

export const commonFieldErr = "Please answer this question in order to proceed";

export const allConstantVals = {
  valuationJobType: { label: "RICS Valuation", value: "Valuation" },
  surveyJobType: { label: "RICS Survey", value: "Survey" },
  otherJobType: { label: "Other Service", value: "Other" },

  level2Name: {
    label: "RICS Level 2 (Homebuyer Survey)",
    value: "Homebuyer - No Valuation",
  },
  level3Name: {
    label: "RICS Level 3 (Building Survey)",
    value: "Building Survey - No Valuation",
  },

  before_1850: { label: "Before 1850", value: "10" },
  between_1850_1899: { label: "Between 1850 - 1899", value: "15" },
  between_1900_1949: { label: "Between 1900 - 1949", value: "20" },
  between_1950_1979: { label: "Between 1950 - 1979", value: "25" },
  between_1980_2009: { label: "Between 1980 – 2009", value: "30" },
  on_or_after_2010: { label: "On or after 2010", value: "35" },

  help_to_buy: { label: "Help to buy", value: "Help to buy" },
  shared_ownership: { label: "Shared Ownership", value: "Shared Ownership" },
  probate: { label: "Probate", value: "Probate" },
  capital_gain: { label: "Capital Gain", value: "Capital Gain" },
  matrimonial: { label: "Matrimonial", value: "Matrimonial" },
  market_valuation: { label: "Market Valuation", value: "Market Valuation" },
  immigration: { label: "Immigration", value: "Immigration" },
  right_to_buy: { label: "Right to buy", value: "Right to buy" },
  buying_home: { label: "Buying home", value: "Buying home" },
  selling_home: { label: "Selling home", value: "Selling home" },
  any_other_reason: { label: "Any other reason", value: "Any other reason" },

  redeeming_loan: { label: "Redeeming loan", value: "Redeeming loan" },
  re_mortgaging: { label: "Re-mortgaging", value: "Re-mortgaging" },
  selling: { label: "Selling", value: "Selling" },
  staircasing: { label: "Staircasing", value: "Staircasing" },

  yes: { label: "Yes", value: "Yes" },
  no: { label: "No", value: "No" },
  i_dont_know: { label: "I don't know", value: "Not Sure" },

  flat: { label: "Flat", value: "Flat" },
  maisonette: { label: "Maisonette", value: "Maisonette" },
  terraced: { label: "Terraced", value: "Terraced" },
  semi_detached: { label: "Semi Detached", value: "Semi Detached" },
  detached: { label: "Detached", value: "Detached" },
  bungalow: { label: "Bungalow", value: "Bunglow" },
  cottage: { label: "Cottage", value: "Cottage" },
  end_of_terrace: { label: "End of Terrace", value: "End of Terrace" },

  a1: { label: "A1", value: "A1" },
  a2: { label: "A2", value: "A2" },
  a3: { label: "A3", value: "A3" },
  b1: { label: "B1", value: "B1" },
  b2: { label: "B2", value: "B2" },

  1: { label: "1", value: "1" },
  2: { label: "2", value: "2" },
  3: { label: "3", value: "3" },
  4: { label: "4", value: "4" },
  5: { label: "5", value: "5" },
  6: { label: "6", value: "6" },
  7: { label: "7+", value: "7" },

  less_than_500000: { label: "Less than £500,000", value: "10" },
  "500000_749999": { label: "£500,000 - £749,999", value: "15" },
  "750000_999999": { label: "£750,000 - £999,999", value: "20" },
  "1000000_1249999": { label: "£1,000,000 - £1,249,999", value: "25" },
  "1250000_1499999": { label: "£1,250,000 - £1,499,999", value: "30" },
  "1500000_1749999": { label: "£1,500,000 - £1,749,999", value: "35" },
  "1750000_1999999": { label: "£1,750,000 - £1,999,999", value: "40" },
  "2000000_or_more": { label: "£2,000,000 or more", value: "45" },

  freehold: { label: "Freehold", value: "Freehold" },
  leasehold: { label: "Leasehold", value: "Leasehold" },

  "85_years_and_over": { label: "85 years and over", value: "30" },
  "51_to_84_years": { label: "51 to 84 years", value: "20" },
  "50_years_or_under": { label: "50 years or under", value: "10" },

  stage_fail_no_service: { value: "Fail - No Service" },
  stage_lead_scoring: { value: "Lead Scoring" },
  stage_product: { value: "Product" },
  stage_personal: { value: "Personal" },
  stage_property: { value: "Property" },
  stage_property_non_standard: { value: "Property - Non-standard" },
  stage_property_additional: { value: "Property - Additional" },
  stage_quote: { value: "Quote" },
  stage_quote_no_slots: { value: "Quote - No Slots" },
  stage_fail_no_level_2: { value: "Fail - No Level 2" },
  stage_online_order: { value: "Online Order" },
  stage_payment: { value: "Payment" },
};

export const valuationReasons = [
  {
    key: "key1",
    btnTitle: allConstantVals.help_to_buy.label,
    value: allConstantVals.help_to_buy.value,
  },
  {
    key: "key2",
    btnTitle: allConstantVals.shared_ownership.label,
    value: allConstantVals.shared_ownership.value,
  },
  {
    key: "key3",
    btnTitle: allConstantVals.probate.label,
    value: allConstantVals.probate.value,
  },
  {
    key: "key4",
    btnTitle: allConstantVals.capital_gain.label,
    value: allConstantVals.capital_gain.value,
  },
  {
    key: "key5",
    btnTitle: allConstantVals.matrimonial.label,
    value: allConstantVals.matrimonial.value,
  },
  {
    key: "key6",
    btnTitle: allConstantVals.market_valuation.label,
    value: allConstantVals.market_valuation.value,
  },
  {
    key: "key7",
    btnTitle: allConstantVals.immigration.label,
    value: allConstantVals.immigration.value,
  },
  {
    key: "key8",
    btnTitle: allConstantVals.right_to_buy.label,
    value: allConstantVals.right_to_buy.value,
  },
  {
    key: "key9",
    btnTitle: allConstantVals.buying_home.label,
    value: allConstantVals.buying_home.value,
  },
  {
    key: "key10",
    btnTitle: allConstantVals.selling_home.label,
    value: allConstantVals.selling_home.value,
  },
  {
    key: "key11",
    btnTitle: allConstantVals.any_other_reason.label,
    value: allConstantVals.any_other_reason.value,
  },
];

export const jobType = [
  {
    key: "key1",
    btnTitle: "RICS Survey",
    btnSubTitle:
      "Level 2 Homebuyer with or without valuation or Level 3 Building Survey",
    btnImg: "/assets/images/old-website/lead/images/job-type-survey.png",
    value: allConstantVals.surveyJobType.value,
  },
  {
    key: "key2",
    btnTitle: "RICS Valuation",
    btnSubTitle:
      "Professional Valuation for purposes such as help to buy, shared ownership and probate",
    btnImg: "/assets/images/old-website/lead/images/job-type-val.png",
    value: allConstantVals.valuationJobType.value,
  },
  {
    key: "key3",
    btnTitle: "Other Service",
    btnSubTitle:
      "Any other RICS service such as land survey, party wall, defect analysis",
    btnImg: "/assets/images/old-website/lead/images/job-type-other.png",
    value: allConstantVals.otherJobType.value,
  },
];
export const bedrooms = [
  {
    key: "key1",
    btnTitle: allConstantVals["1"].label,
    value: allConstantVals["1"].value,
  },
  {
    key: "key2",
    btnTitle: allConstantVals["2"].label,
    value: allConstantVals["2"].value,
  },
  {
    key: "key3",
    btnTitle: allConstantVals["3"].label,
    value: allConstantVals["3"].value,
  },
  {
    key: "key4",
    btnTitle: allConstantVals["4"].label,
    value: allConstantVals["4"].value,
  },
  {
    key: "key5",
    btnTitle: allConstantVals["5"].label,
    value: allConstantVals["5"].value,
  },
  {
    key: "key6",
    btnTitle: allConstantVals["6"].label,
    value: allConstantVals["6"].value,
  },
  {
    key: "key7",
    btnTitle: allConstantVals["7"].label,
    value: allConstantVals["7"].value,
  },
];

export const propertyType = [
  {
    key: "key1",
    btnTitle: allConstantVals.flat.label,
    value: allConstantVals.flat.value,
  },
  {
    key: "key2",
    btnTitle: allConstantVals.maisonette.label,
    value: allConstantVals.maisonette.value,
  },
  {
    key: "key3",
    btnTitle: allConstantVals.terraced.label,
    value: allConstantVals.terraced.value,
  },
  {
    key: "key4",
    btnTitle: allConstantVals.semi_detached.label,
    value: allConstantVals.semi_detached.value,
  },
  {
    key: "key5",
    btnTitle: allConstantVals.detached.label,
    value: allConstantVals.detached.value,
  },
  {
    key: "key6",
    btnTitle: allConstantVals.bungalow.label,
    value: allConstantVals.bungalow.value,
  },
  {
    key: "key7",
    btnTitle: allConstantVals.cottage.label,
    value: allConstantVals.cottage.value,
  },
  {
    key: "key8",
    btnTitle: allConstantVals.end_of_terrace.label,
    value: allConstantVals.end_of_terrace.value,
  },
];

export const surveyType = [
  {
    key: "key1",
    btnTitle: "RICS Level 2 (Homebuyer Survey)",
    btnImg: "/assets/images/old-website/lead/images/level2.png",
    btnList: [
      "Most popular condition survey",
      "Concise easy to understand report",
      "Suitable for most standard properties",
    ],
    value: allConstantVals.level2Name.value,
  },
  {
    key: "key2",
    btnTitle: "RICS Level 3 (Building Survey)",
    btnImg: "/assets/images/old-website/lead/images/level3.png",
    btnList: [
      "Most comprehensive condition survey",
      "Detailed construction and condition advice",
      "Ideal for larger, older or non-standard properties",
    ],
    value: allConstantVals.level3Name.value,
  },
];
