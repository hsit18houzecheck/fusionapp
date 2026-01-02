import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQContent } from "./types";
import { SectionWrapper } from "../SectionWrapper";
import SectionHeader from "../SectionWrapper/Header";

export type FAQClientProps = FAQContent;

export default function FAQClient({
  eyebrow,
  title,
  description,
  faq,
}: FAQClientProps) {
  return (
    <section className="w-full bg-white px-6 py-10">
      <div className="md:max-w-440 md:px-10 mx-auto">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="w-full md:w-1/2 mb-10 lg:mb-0 gap-4 md:gap-6">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              contentCenter={false}
              headingClassName="mb-4 md:mb-6"
            />
            <div
              className="text-grey-500 text-base md:text-lg font-medium leading-relaxed [&_a]:text-yellow-900 [&_a]:underline [&_a]:hover:text-yellow-700 [&_a]:transition-colors [&_a]:font-medium [&_p]:m-0"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue="item-0"
            >
              {faq?.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-white rounded-2xl py-5 px-0 md:py-6 md:px-4 m-0 pl-4 data-[state=open]:bg-yellow-100/80 data-[state=open]:md:py-6 data-[state=open]:md:px-4"
                >
                  <AccordionTrigger
                    className={cn(
                      "font-freight text-yellow-900 text-xl md:text-2xl font-medium p-0 lining-nums proportional-nums",
                      "hover:no-underline",
                      "[&[data-state=open]>svg]:bg-yellow-100 [&[data-state=open]>svg]:text-yellow-900",
                      "[&>svg]:bg-yellow-500 [&>svg]:text-yellow-900 [&>svg]:rounded-md",
                      "[&>svg]:w-10 [&>svg]:h-10 [&>svg]:p-2.5 [&>svg]:shrink-0"
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-grey-500 text-sm md:text-base leading-relaxed pt-4 pr-1">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
