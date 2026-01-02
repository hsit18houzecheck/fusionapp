"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";
import { QuizDetail } from "../types";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SurveyComparisonContent } from "@/components/SurveyComparison/types";
import { DEFAULT_SURVEY_COMPARISON_CONTENT } from "@/components/SurveyComparison/constants";
import SurveyComparisonDialog from "@/components/SurveyComparison/Dialog";
import Quiz, { type QuizHandle } from "@/components/Quiz";
import type { QuizContent } from "@/components/Quiz/types";

type QuizCardsSectionProps = {
  quizdetails: QuizDetail[];
  surveyComparison: SurveyComparisonContent;
};

export default function QuizCardsSection({
  quizdetails,
  surveyComparison,
}: QuizCardsSectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [quizProps, setQuizProps] = useState<QuizContent | undefined | null>(null);

  const quizRef = useRef<QuizHandle>(null);

  const content = DEFAULT_SURVEY_COMPARISON_CONTENT as SurveyComparisonContent;

  if (!quizdetails || quizdetails.length === 0) return null;

  return (
    <div className={cn("w-full bg-white", "px-6 md:px-0 pb-8 md:pb-10")}>
      <div className="md:max-w-440 md:px-10 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10">
          {quizdetails.map((quizdetail, index) => (
            <Card
              key={index}
              index={index}
              eyebrow={quizdetail.eyebrows}
              title={quizdetail.title}
              subtitle={quizdetail.subtitle}
              variant={quizdetail.variant || (index === 0 ? "yellow" : "dark")}
              className={cn(index === 0 ? "mb-8 md:mb-0" : "")}
              button={
                quizdetail.button
                  ? {
                    label: quizdetail.button.label,
                    icon: quizdetail.button.icon as any,
                    iconPosition: quizdetail.button.iconPosition,
                    url: quizdetail.button.url,
                    onClick: quizdetail.quiz ? () => {
                      setQuizProps(quizdetail.quiz);
                      quizRef.current?.open(true);
                    } : undefined,
                  }
                  : undefined
              }
              contentAlignment="end"
              quiz={quizdetail.quiz}
            />
          ))}
        </div>
      </div>

      {quizProps ? (
        <Quiz ref={quizRef} {...quizProps}>
          <span className="hidden" />
        </Quiz>
      ) : null}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="overflow-y-auto bg-foreground text-black border-none flex flex-col items-center p-0 min-w-[80dvw] 2xl:min-w-[85rem] outline-none max-h-[95dvh] rounded-3xl gap-0"
          overlayClassName="bg-black/80"
        >
          <DialogTitle className="hidden">Survey Comparison</DialogTitle>
          <SurveyComparisonDialog
            eyebrow={surveyComparison.eyebrow}
            title={surveyComparison.title}
            comparisonDate={surveyComparison.comparisonDate}
            table={surveyComparison.table}
            ctaButton={surveyComparison.ctaButton}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
