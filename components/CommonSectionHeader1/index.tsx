import AnimateOnView from "../ui/animate-on-view";
import { CommonSectionHeader1Content } from "./types";

const CommonSectionHeader1 = ({
  eyebrow,
  title,
  subheading,
  children,
}: CommonSectionHeader1Content) => {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto md:max-w-[110rem] space-y-10 px-6 md:px-10">
        {(!!eyebrow?.text || !!title?.text || !!subheading?.text) && (
          <AnimateOnView className="space-y-5 px-6 md:px-0">
            {!!eyebrow && (
              <p
                className="eyebrow-lg text-center !tracking-[0.1875rem]"
                style={{ color: eyebrow.color }}
              >
                {eyebrow.text}
              </p>
            )}
            {!!title && (
              <p
                className="text-center font-freight font-medium text-[2.5rem] md:text-[3.5rem] text-foreground"
                style={{ color: title.color }}
              >
                {title.text}
              </p>
            )}
            {!!subheading && (
              <p
                className="text-center font-medium text-xs text-muted-foreground"
                style={{ color: subheading.color }}
              >
                {subheading.text}
              </p>
            )}
          </AnimateOnView>
        )}
        {children && children}
      </div>
    </section>
  );
};

export default CommonSectionHeader1;
