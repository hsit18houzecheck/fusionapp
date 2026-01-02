export interface SavingsEstimatorTopDefectsData {
  top_defects: string;
  total_low: number;
  total_high: number;
  jobs: number;
  average_recurrence_percentage: number;
}

export interface SavingsEstimatorContent {
  eyebrow: string;
  info: {
    icon: string;
    label: string;
    disclaimer: string;
  };
  inputLabel: string;
  rightSection: {
    loading: {
      subheading: string;
      title: string;
    };
    noData: {
      averageData: {
        data1: string;
        data2: string;
        data3: string;
        label: string;
      };
      disclaimer: string;
      headerIcon: string;
      subheading: string;
      title: string;
    };
    placeholderImages: {
      bottom: {
        icon: string;
        text: string;
      };
      middle: {
        text: string;
      };
      top: {
        text: string;
      };
    };
    report: {
      action1: {
        icon: string;
        label: string;
      };
      action2: {
        label: string;
        url: string;
      };
      bodyText: string;
      disclaimer: string;
      info: {
        icon: string;
        label: string;
      };
      primaryBtn: {
        icon: string;
        label: string;
        url: string;
      };
      refineBtn: {
        label: string;
      };
      secondaryBtn: {
        icon: string;
        label: string;
        url: string;
      };
      title: string;
    };
  };
  searchBtn: {
    icon: string;
    label: string;
  };
  subheading: string;
  title: string;
}
