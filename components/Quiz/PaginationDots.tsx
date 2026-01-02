import { cn } from "@/lib/utils";
import { PaginationDotsProps } from "./types";

const PaginationDots = ({
  length,
  currentQuestionIndex,
  isComplete,
}: PaginationDotsProps) => (
  <div className="flex justify-center gap-2 my-8 md:my-10">
    {Array.from({ length: length + 1 }).map((_, questionIndex) => (
      <button
        key={questionIndex}
        className="h-[0.1875rem]"
        aria-label={`Go to slide ${questionIndex + 1}`}
      >
        <div
          className={cn("w-10 md:w-16 h-1 rounded-full bg-primary", {
            "opacity-20":
              (currentQuestionIndex !== questionIndex &&
                !(isComplete && questionIndex === length)) ||
              (isComplete && questionIndex !== length),
          })}
        />
      </button>
    ))}
  </div>
);

export default PaginationDots;
