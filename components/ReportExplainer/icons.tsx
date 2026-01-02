import Image from "next/image";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
  iconUrl?: string;
};

export function ReportIcon({ className, iconUrl }: IconProps) {
  const iconSrc = iconUrl || "/assets/images/asterisk.svg";

  return (
    <div className={cn("w-5 h-5 relative m-1", className)}>
      <Image
        src={iconSrc}
        alt=""
        fill
        unoptimized
        className="object-contain"
        aria-hidden="true"
      />
    </div>
  );
}
