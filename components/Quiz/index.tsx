"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QuizContent, Option } from "./types";
import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import AnimateOnView from "../ui/animate-on-view";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../Button";

import DoneView from "./DoneView";
import TipsView from "./Tips";
import PaginationDots from "./PaginationDots";
import { SectionWrapper } from "../SectionWrapper";

export type QuizHandle = {
  open: (isTips?: boolean) => void;
  close: () => void;
  toggle: () => void;
  setTips: (value: boolean) => void;
  setQuestion: (index: number) => void;
  reset: () => void;
};

const Quiz = forwardRef<QuizHandle, QuizContent>(
  (
    {
      children,
      backgroundColor,
      eyebrow,
      title,
      yesBtn,
      noBtn,
      quiz,
      doneSlide,
      tipsSlide,
    }: QuizContent,
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [isTips, setIsTips] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [answers, setAnswers] = useState<(Option | null)[]>(() =>
      Array(quiz.questions.length).fill(null as Option | null)
    );

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const totalQuestions = quiz.questions.length;
    const isFirst = currentQuestionIndex === 0;
    const isLast = currentQuestionIndex === totalQuestions - 1;
    const isOptionSelected = selectedOption !== null;
    const isCorrect = selectedOption?.value === currentQuestion.answer;
    const titleShape =
      typeof title === "object" && title !== null
        ? { text: title.text, color: (title as { color?: string }).color }
        : { text: title as string };

    const handleCleanUp = (state: boolean) => {
      setOpen(state);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setAnswers([]);
      setIsComplete(false);
    };

    useImperativeHandle(ref, () => ({
      open: (isTipsParam?: boolean) => {
        if (typeof isTipsParam === "boolean") setIsTips(isTipsParam);
        setOpen(true);
      },
      close: () => setOpen(false),
      toggle: () => setOpen((prev) => !prev),
      setTips: (value: boolean) => setIsTips(value),
      setQuestion: (index: number) =>
        setCurrentQuestionIndex(
          Math.max(0, Math.min(quiz.questions.length - 1, index))
        ),
      reset: () => handleCleanUp(false),
    }));

    useEffect(() => {
      setSelectedOption(answers[currentQuestionIndex] ?? null);
    }, [currentQuestionIndex, answers]);

    return (
      <Dialog open={open} onOpenChange={handleCleanUp}>
        {children ? (
          children
        ) : (
          <SectionWrapper
            className="bg-background py-36 md:py-[8.875rem]"
            containerClassName="items-center"
            headingClassName="m-0"
            style={{ backgroundColor }}
            eyebrow={eyebrow}
            title={{
              text: titleShape.text,
              style: { color: titleShape.color },
            }}
          >
            {(yesBtn || noBtn) && (
              <AnimateOnView
                className={cn("flex md:w-[inherit] space-x-2", {
                  "w-full": yesBtn && yesBtn.label && noBtn && noBtn.label,
                })}
                delay={2 * 0.15}
              >
                {yesBtn && !!yesBtn.label && (
                  <DialogTrigger asChild className="flex-1">
                    <Button
                      className="w-full md:w-[10.75rem]"
                      leftIcon={yesBtn.leftIcon}
                      rightIcon={yesBtn.rightIcon}
                      onClick={() => {
                        setIsTips(false);
                        setOpen(true);
                      }}
                    >
                      {yesBtn.label}
                    </Button>
                  </DialogTrigger>
                )}
                {noBtn && !!noBtn.label && (
                  <DialogTrigger asChild className="flex-1">
                    <Button
                      className="w-full md:w-[10.75rem]"
                      leftIcon={noBtn.leftIcon}
                      rightIcon={noBtn.rightIcon}
                      onClick={() => {
                        setIsTips(true);
                        setOpen(true);
                      }}
                    >
                      {noBtn.label}
                    </Button>
                  </DialogTrigger>
                )}
              </AnimateOnView>
            )}
          </SectionWrapper>
        )}
        <DialogContent
          className="bg-foreground text-white border-none flex flex-col items-center p-6 md:p-10 min-w-[80dvw] 2xl:min-w-[85rem] outline-none max-h-[95dvh] rounded-3xl gap-0"
          overlayClassName="bg-white/80"
        >
          <VisuallyHidden>
            <DialogTitle>Survey Quiz</DialogTitle>
          </VisuallyHidden>
          <AnimateOnView className="flex flex-col items-center">
            <div className="space-y-5 md:space-y-7">
              <p className="eyebrow-lg text-center">
                {!isTips ? quiz.eyebrow : quiz.noEyebrow || ""}
              </p>
              <h2 className="font-medium text-[1.75rem] leading-[1.75rem] md:text-[2.5rem] md:leading-[2.5rem] font-freight text-center px-4">
                {!isTips ? quiz.title : quiz.noTitle || ""}
              </h2>
              <h2 className="font-medium text-base md:text-lg text-center">
                {!isTips ? quiz.subheading : quiz.noSubheading || ""}
              </h2>
            </div>
            {!isTips && (
              <PaginationDots
                length={quiz.questions.length}
                currentQuestionIndex={currentQuestionIndex}
                isComplete={isComplete}
              />
            )}
          </AnimateOnView>
          <div
            className={cn(
              "rounded-2xl bg-yellow-800 w-full min-h-[50dvh] md:min-h-[45dvh] flex flex-col items-center justify-center space-y-6 md:space-y-12 relative overflow-hidden",
              {
                "px-6 py-6 md:py-12": !isTips,
                "py-11 md:py-9 mt-5 md:mt-7": isTips,
              }
            )}
          >
            <div className="absolute -left-[56.5%] md:-left-[16%] -bottom-[19%] md:-bottom-[13%] h-[25.25rem] w-[32.9375rem] md:h-[16.875rem] md:w-[33.75rem] z-0">
              <Image
                src="/assets/illustrations/house-shape.svg"
                alt="house shape"
                fill
                className="object-contain scale-x-[-1]"
              />
            </div>
            {isTips && <TipsView tipsSlide={tipsSlide} />}
            {!isTips && (
              <>
                {isComplete && (
                  <DoneView
                    doneSlide={doneSlide}
                    isMultiSelectOption={quiz.isMultiSelectOption}
                    answers={answers}
                    questions={quiz.questions}
                    onClose={() => setOpen(false)}
                  />
                )}
                {!isComplete && (
                  <>
                    <div className="min-h-auto md:min-h-70 lg:min-h-70 xl:min-h-auto overflow-y-auto md:overflow-y-hidden space-y-10 md:space-y-5 lg:space-y-6 xl:space-y-12 flex-1 md:flex-[inherit] py-13 md:py-0">
                      <AnimateOnView className="md:h-[6.5625rem] xl:h-[8.5625rem] flex items-end justify-center">
                        <h3 className="font-medium font-freight text-2xl md:text-[2rem] md:leading-8 text-center px-4 z-10">
                          {currentQuestion.question}
                        </h3>
                      </AnimateOnView>
                      <div className="flex gap-y-4 md:gap-y-0 gap-x-4 flex-wrap items-center justify-center">
                        {currentQuestion.options.map((option, optionIndex) => {
                          const { label, value } = option;
                          const isSelected = selectedOption?.value === value;

                          return (
                            <AnimateOnView
                              key={value}
                              delay={optionIndex * 0.1}
                            >
                              <Button
                                leftIcon={
                                  !quiz.isMultiSelectOption &&
                                  isOptionSelected &&
                                  ((value === currentQuestion.answer &&
                                    "MdCheck") ||
                                    (isSelected &&
                                      !isCorrect &&
                                      "IoCloseSharp"))
                                }
                                iconClassName="size-5"
                                variant="secondary"
                                className={cn(
                                  "bg-foreground/40 backdrop-blur-md whitespace-break-spaces",
                                  {
                                    "bg-yellow-500 hover:bg-yellow-500 text-yellow-900":
                                      quiz.isMultiSelectOption &&
                                      isOptionSelected &&
                                      isSelected,
                                  },
                                  !quiz.isMultiSelectOption &&
                                    isOptionSelected && {
                                      "bg-success-100 hover:bg-success-100 text-success-500":
                                        isSelected && isCorrect,
                                      "bg-error-100 hover:bg-error-100 text-error-500":
                                        isSelected && !isCorrect,
                                      "text-success-100 hover:bg-foreground/40":
                                        !isSelected &&
                                        value === currentQuestion.answer,
                                    }
                                )}
                                onClick={() => {
                                  if (
                                    !isOptionSelected ||
                                    quiz.isMultiSelectOption
                                  ) {
                                    setSelectedOption(option);
                                    setAnswers((prev) => {
                                      const next = [...prev];
                                      next[currentQuestionIndex] = option;
                                      return next;
                                    });
                                  }
                                }}
                              >
                                {label}
                              </Button>
                            </AnimateOnView>
                          );
                        })}
                      </div>
                      {selectedOption?.explanation && (
                        <AnimateOnView className="z-10">
                          <p className="text-xs md:text-base text-white text-center">
                            {selectedOption?.explanation}
                          </p>
                        </AnimateOnView>
                      )}
                    </div>
                    <AnimateOnView
                      delay={0.3}
                      className={cn(
                        "flex min-w-full md:min-w-[62%] justify-between z-10 items-end",
                        {
                          "md:h-[3rem] lg:h-[6.6875rem]": selectedOption?.explanation,
                          "md:h-[3rem] lg:h-[6.5625rem]": !selectedOption?.explanation,
                        }
                      )}
                    >
                      <Button
                        variant="ghost"
                        disabled={isFirst}
                        leftIcon={
                          quiz.previousBtn.leftIcon || quiz.previousBtn.icon
                        }
                        iconClassName="size-5"
                        onClick={() =>
                          setCurrentQuestionIndex((prevQuestionIndex) =>
                            Math.max(0, prevQuestionIndex - 1)
                          )
                        }
                      >
                        {quiz.previousBtn.label}
                      </Button>
                      <Button
                        disabled={!isOptionSelected}
                        rightIcon={quiz.nextBtn.rightIcon || quiz.nextBtn.icon}
                        iconClassName="size-5"
                        onClick={() => {
                          if (isLast) {
                            setIsComplete(true);
                            return;
                          }
                          setCurrentQuestionIndex((prevQuestionIndex) =>
                            Math.min(totalQuestions - 1, prevQuestionIndex + 1)
                          );
                        }}
                      >
                        {quiz.nextBtn.label}
                      </Button>
                    </AnimateOnView>
                  </>
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
);

Quiz.displayName = "Quiz";

export default Quiz;
