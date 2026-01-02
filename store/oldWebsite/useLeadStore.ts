import { assoc, assocPath, mergeLeft } from "ramda";
import { COMMON_STORE_KEYS } from "./constants";
import { createStore } from "./utils";

export const KEYS = {
  LOADING: "loading",
  PRODUCT_DATA: "productData",
  LEAD_DETAIL: "leadDetail",
  ACCESS_DETAIL: "accessDetail",
  REPORT_DETAIL: "reportDetail",
  ERROR_TYPE: "errorType",
  ...COMMON_STORE_KEYS,
};

type ProductData = {
  currentStep: number | null;
  quoteData: Record<string, unknown>;
  appointment: boolean;
  callbackStatus: string | null;
  valuation: boolean;
  version: number;
  property_postcode?: string;
  u_show_online?: boolean;
  job_type?: string;
  survey_type?: string;
  other_service?: string;
  build_year_l2?: string;
  property_address?: string;
  non_standard_prop?: string;
  had_alter_in_prop?: string;
  had_prop_extented?: string;
  plan_alter_in_prop?: string;
  is_prop_condtn_poor?: string;
  bedrooms?: string;
  property_type?: string;
  val_reason?: string;
  specific_reason?: string;
  val_for_lending?: string;
  requirement_expert_witness?: string;
  [key: string]: unknown;
};

type LeadState = {
  [KEYS.LOADING]: boolean;
  [KEYS.LEAD_DETAIL]: Record<string, unknown>;
  [KEYS.PRODUCT_DATA]: ProductData;
  [KEYS.ACCESS_DETAIL]: Record<string, unknown>;
  [KEYS.REPORT_DETAIL]: Record<string, unknown>;
  [KEYS.ERROR_TYPE]: string | null;
};

type LeadActions = {
  updateStep: (payload: number | null) => void;
  updateErr: (payload: string | null) => void;
  loadingLead: (payload: boolean) => void;
  createLead: (payload: Record<string, unknown>) => void;
  updateLead: (payload: Partial<LeadState>) => void;
};

const initialState: LeadState = {
  [KEYS.LOADING]: false,
  [KEYS.LEAD_DETAIL]: {},
  [KEYS.PRODUCT_DATA]: {
    currentStep: null,
    quoteData: {},
    // if appointment data is blank then this flag is set for thank you page.
    appointment: true,
    callbackStatus: null,
    valuation: false,
    version: 1,
  },
  [KEYS.ACCESS_DETAIL]: {},
  [KEYS.REPORT_DETAIL]: {},
  [KEYS.ERROR_TYPE]: null,
};

const actions = ({
  set,
  get,
}: {
  set: (updater: any) => void;
  get: () => LeadState & LeadActions;
}): LeadActions => ({
  updateStep: (payload: number | null) =>
    set(assocPath([KEYS.PRODUCT_DATA, "currentStep"], payload)),
  updateErr: (payload: string | null) =>
    set(assocPath([KEYS.ERROR_TYPE], payload)),
  loadingLead: (payload: boolean) => set(assoc(KEYS.LOADING, payload)),
  createLead: (payload: Record<string, unknown>) => {
    set(mergeLeft({ [KEYS.LOADING]: false, [KEYS.LEAD_DETAIL]: payload }));
  },
  updateLead: (payload: Partial<LeadState>) => {
    // Shallow-merge incoming state updates instead of replacing the store
    set(payload as Partial<LeadState>);
  },
});

const useLeadStore = createStore<LeadState, LeadActions>({
  storeName: "lead",
  initialState,
  actions,
});

export { KEYS as LEAD_STORE_KEYS };
export default useLeadStore;
export type { LeadState, ProductData, LeadActions };
