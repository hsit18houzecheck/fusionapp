export interface LandingPageContent {
  count_down_timer_text?: string;
  count_down_timer_till_2_on_sat?: boolean;
  key?: string;
  test_key?: string;
  left_hero_title?: string;
  show_clock?: boolean;
  bg_col?: string;
  hero_form_title?: string;
  hero_image?: string;
  hero_form_cta_label?: string;
  header_sticky?: boolean;
  weekday_non_business_hours_show_today?: boolean;
  saturday_non_business_hours_show_weekly?: boolean;
}

export interface TimerData {
  hour: string;
  minute: string;
  second: string;
}

export interface TimerProps {
  landingPageContent: LandingPageContent;
  isBeforeWrapUp: boolean;
  time: TimerData;
}

export interface FormProps {
  submitButtonId?: string;
}

export interface VariantAProps {
  userKey?: string;
  landingPageContent: LandingPageContent;
  formProps?: FormProps;
}

export interface HeroProps extends VariantAProps {}

export interface NavbarProps {
  landingPageContent: LandingPageContent;
}

export interface SectionWithLandingContentProps {
  landingPageContent: LandingPageContent;
}

export interface BackToFormProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  formId?: string;
  theme?: "light" | "dark";
  className?: string;
}

export interface PhoneWrapperProps {
  children?: React.ReactNode;
  landingPageContent?: LandingPageContent;
}

export interface ClientCookieSetterProps {
  cookieKey: string;
  cookieVal: string;
}

export interface GTMEventData {
  event?: string;
  experiment_name?: string;
  variant?: string;
  [key: string]: unknown;
}

export interface ClientDataLayerPusherProps {
  eventDatas?: GTMEventData[];
}

export interface HeroFormProps {
  isBeforeWrapUp: boolean;
  userKey?: string;
  landingPageContent: LandingPageContent;
  formProps?: FormProps;
}
