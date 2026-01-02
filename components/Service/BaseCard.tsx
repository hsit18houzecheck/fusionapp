import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

type BaseCardProps = {
  image: string;
  badge?: string;
  children: ReactNode;
  className?: string;
};

export const BaseCard = ({ image, badge, children, className }: BaseCardProps) => {
  return (
    <article className={cn("relative rounded-[16px] overflow-hidden group bg-yellow-900/5", className)}>
      <Image
        src={image}
        alt=""
        width={800}
        height={520}
        className="h-[520px] md:h-[767px] w-full object-cover"
        priority={false}
      />

      {badge && (
        <div className="absolute left-6 top-4">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] text-xs font-semibold bg-info-100 text-info-500 border border-info-500/20">
            <span className="text-info-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_1222_4190"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1222_4190)">
                  <path
                    d="M8.97919 17.4004V12.4602L5.47732 15.9502L4.03794 14.5109L7.50461 11.0327H2.59961V8.99086H7.53982L4.04982 5.48919L5.47732 4.03794L8.97919 7.52815V2.59961H11.0209V7.50461L14.4992 4.03794L15.9502 5.48919L12.4602 8.99086H17.4004V11.0327H12.4838L15.9502 14.5109L14.5109 15.9502L11.0209 12.4719V17.4004H8.97919Z"
                    fill="#00588E"
                  />
                </g>
              </svg>
            </span>
            {badge.toUpperCase()}
          </span>
        </div>
      )}
      {children}
    </article>
  );
};
