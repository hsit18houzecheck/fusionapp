import {
  SavingsEstimatorContent,
  SavingsEstimatorTopDefectsData,
} from "./types";

export const DEFAULT_CONTENT: SavingsEstimatorContent = {
  eyebrow: "MONEY & FINANCE",
  info: {
    icon: "MdInfoOutline",
    label:
      "£15k - £30k is what UK buyers typically spend fixing hidden problems after they move in.",
    disclaimer: "*Based on Houzecheck's historical reporting data",
  },
  inputLabel: "Enter your property postcode",
  rightSection: {
    loading: {
      subheading: "comparing and analysing 40,000+ surveys",
      title: "Your Estimated Rep.......",
    },
    noData: {
      averageData: {
        data1: "🏠 Average repair cost: <average_repair_cost>",
        data2: "🔧 Common issues: <common_issues>",
        data3: "📊 Typical defect likelihood: ~<likelihood_percentage>%",
        label: "In the meantime, here’s what the UK averages tell us:",
      },
      disclaimer:
        "Disclaimer: Information shown is based on data collected from <no_of_surveys> property surveys conducted in the <postcode> area. Figures are indicative and may vary depending on property type, location, and survey conditions.",
      headerIcon: "BsClock",
      subheading:
        "It looks like we haven’t surveyed enough homes in <postcode> just yet — our surveyors are still mapping the area.",
      title: "Not Enough Local Data - Showing UK Averages",
    },
    placeholderImages: {
      bottom: {
        icon: "/assets/images/bulb-icon.svg",
        text: "Recommendation",
      },
      middle: {
        text: "Estimated repair cost vs number of defects",
      },
      top: {
        text: "Your potential saving",
      },
    },
    report: {
      action1: {
        icon: "/assets/images/bulb-icon.svg",
        label: "Recommendation",
      },
      action2: {
        label: "See full savings breakdown",
        url: "/savings-breakdown",
      },
      bodyText:
        "Get a Level 2 survey and negotiate <range> to avoid post‑purchase repair cost.",
      disclaimer:
        "Disclaimer: Information shown is based on data collected from <no_of_surveys> property surveys conducted in the <postcode> area. Figures are indicative and may vary depending on property type, location, and survey conditions.",
      info: {
        icon: "MdInfoOutline",
        label: "Indicative estimate - not a formal quote",
      },
      primaryBtn: {
        icon: "MdArrowOutward",
        label: "Convinced, Book a Survey",
        url: "/book",
      },
      refineBtn: {
        label: "Refine estimate",
      },
      secondaryBtn: {
        icon: "MdArrowOutward",
        label: "Share Repair Cost",
        url: "/savings-report-share",
      },
      title: "Estimated Repair Costs",
    },
  },
  searchBtn: {
    icon: "MdOutlineSearch",
    label: "Show My Estimate",
  },
  subheading:
    "A survey can save you hundreds or even thousands. Find out how much you can save on repair costs.",
  title: "How much could a survey save you?",
};

export const DEFAULT_TOP_DEFECTS_DATA: SavingsEstimatorTopDefectsData = {
  top_defects: "Electrical, Boiler, Roof",
  total_low: 753,
  total_high: 1660,
  jobs: 5000,
  average_recurrence_percentage: 81.38,
};

export {
  DEFAULT_CONTENT as DEFAULT_SAVINGS_ESTIMATOR_CONTENT,
  DEFAULT_TOP_DEFECTS_DATA as DEFAULT_SAVINGS_ESTIMATOR_TOP_DEFECTS_DATA,
};
