import Link from "next/link";
import AnimateOnView from "../ui/animate-on-view";
import { Button } from "../Button";
import type { Option, Question, QuizContent } from "./types";
import { handleCTAClick } from "@/lib/utils";

export default function DoneView({
  doneSlide,
  isMultiSelectOption,
  answers,
  questions,
  onClose,
}: {
  doneSlide: QuizContent["doneSlide"];
  isMultiSelectOption: boolean | undefined;
  answers: (Option | null)[];
  questions: Question[];
  onClose: () => void;
}) {
  const getSummary = () => {
    if (isMultiSelectOption && doneSlide.summaries?.length) {
      const matchedSummary = doneSlide.summaries.find(({ matchingAnswers }) => {
        return matchingAnswers.every(
          (match, index) => answers[index]?.value === match.answer
        );
      });

      if (matchedSummary) {
        return matchedSummary.summaryText;
      }
    }

    return doneSlide.subheading;
  };

  return (
    <>
      <AnimateOnView className="z-10">
        <h3 className="font-medium font-freight text-2xl md:text-[2rem] md:leading-[2rem] text-center px-4 z-10">
          {doneSlide.title}
        </h3>
        <p className="font-medium text-xs md:text-sm text-center px-4 md:px-16 mt-4 z-10">
          {getSummary()}
        </p>
      </AnimateOnView>
      <AnimateOnView className="flex z-10">
        <Button
          type="button"
          rightIcon={
            doneSlide.primaryBtn.icon || doneSlide.primaryBtn.rightIcon
          }
          iconClassName="size-5"
          onClick={(e) => {
            onClose();
            handleCTAClick(e, doneSlide.primaryBtn);
          }}
        >
          <Link href={doneSlide.primaryBtn.url || "/"}>
            {doneSlide.primaryBtn.label}
          </Link>
        </Button>
        {!!doneSlide.secondaryBtn?.label && (
          <Button variant="ghost">{doneSlide.secondaryBtn.label}</Button>
        )}
      </AnimateOnView>
    </>
  );
}
