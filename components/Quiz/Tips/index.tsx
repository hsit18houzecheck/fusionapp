import Link from "next/link";
import { QuizContent } from "../types";
import AnimateOnView from "@/components/ui/animate-on-view";
import { Button } from "@/components/Button";
import TipsCarousel from "./TipCarousel";
import { cn } from "@/lib/utils";

export default function TipsView({
  tipsSlide,
}: {
  tipsSlide: QuizContent["tipsSlide"];
}) {
  if (!tipsSlide) return null;
  return (
    <div className="space-y-[1.875rem] flex flex-col items-center w-full px-">
      <div className="flex space-x-12 mt-8 md:mt-0">
        <TipsCarousel icon={tipsSlide.icon} tips={tipsSlide.tips} />
      </div>
      <AnimateOnView
        delay={0.3}
        className={cn("z-10 flex md:justify-center w-full px-6", {
          "justify-between": !!tipsSlide.secondaryBtn?.label,
          "justify-center": !tipsSlide.secondaryBtn?.label,
        })}
      >
        <Link href={tipsSlide.primaryBtn.url || "/"}>
          <Button rightIcon={tipsSlide.primaryBtn.icon} iconClassName="size-5">
            {tipsSlide.primaryBtn.label}
          </Button>
        </Link>
        {!!tipsSlide.secondaryBtn?.label && (
          <Button variant="ghost">{tipsSlide.secondaryBtn.label}</Button>
        )}
      </AnimateOnView>
    </div>
  );
}
