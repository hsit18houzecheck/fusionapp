import Image from "next/image";
import { cn } from "@/lib/utils";
import { ShineBorder } from "../ui/shine-border";
import { ComparisonTableProps, BaseRowType } from "./types";
import AnimateOnView from "../ui/animate-on-view";

export function ComparisonTable<R extends BaseRowType>({
  columns,
  rows,
  gridTemplateColumns,
  className,
  bestRowClassName,
}: ComparisonTableProps<R>) {
  return (
    <div
      className={cn(
        "relative w-full border border-primary rounded-2xl overflow-visible",
        className
      )}
    >
      {/* Grid Container */}
      <div className="relative overflow-visible">
        {/* Header Row */}
        <div
          className="grid border-b border-yellow-500 h-25 md:h-30 gap-3 md:gap-1"
          style={{
            gridTemplateColumns:
              gridTemplateColumns || `repeat(${columns.length}, 1fr)`,
          }}
        >
          {columns.map((column) => (
            <div
              className="p-0.25 font-medium md:font-bold text-xs md:text-lg leading-4 md:leading-7 text-yellow-900 md:whitespace-nowrap flex items-center justify-start"
              key={column.value}
            >
              <div className="flex flex-col md:flex-row gap-2.5 items-center text-center">
                {column.icon && (
                  <div className="relative shrink-0 size-5">
                    <Image
                      src={column.icon}
                      alt={column.label}
                      width={20}
                      height={20}
                      unoptimized
                      className="size-full"
                    />
                  </div>
                )}
                {column.label || ""}
              </div>
            </div>
          ))}
        </div>

        {/* Body Rows */}

        {rows.map((row, rowIndex) => (
          <AnimateOnView
            delay={(rowIndex + 1) * 0.15}
            key={rowIndex}
            className={cn(
              "grid border-b border-yellow-500 h-25 md:h-30 last:border-b-0 gap-3 md:gap-1",
              {
                "p-0 items-center bg-warning-100 border-b border-yellow-500 relative min-h-30 md:min-h-35 rounded-2xl shadow-[0px_24px_48px_0px_rgba(0,0,0,0.08)] z-10":
                  row.isBest,
                [`${bestRowClassName}`]: row.isBest,
              }
            )}
            style={{
              gridTemplateColumns:
                gridTemplateColumns || `repeat(${columns.length}, 1fr)`,
            }}
          >
            {row.isBest && (
              <ShineBorder
                borderWidth={2}
                shineColor={["#F39E8A", "#B05200", "#F39E8A"]}
              />
            )}
            {columns.map((column, columnIndex: number) => {
              const cellValue = row[column.value];

              // Use custom renderer if provided, otherwise use raw value
              const cellContent = column.renderCell
                ? column.renderCell({
                  value: cellValue,
                  row,
                  column,
                  rowIndex,
                  columnIndex,
                })
                : cellValue;

              return (
                <div
                  className={cn(
                    "p-0.25 font-semibold md:font-medium text-sm md:text-lg leading-7 text-grey-500 flex items-center justify-start first:pl-3 md:first:pl-3.5",
                    row.isBest &&
                    "font-freight text-lg md:text-[2rem] leading-5 md:leading-9 text-yellow-900 lining-nums overflow-hidden"
                  )}
                  key={column.value}
                >
                  {cellContent}

                  {row.isBest && columnIndex === columns.length - 1 && (
                    <div className="absolute top-2.5 right-auto md:top-5 md:right-5 left-2.5 md:left-auto bg-info-100 flex gap-0 items-center h-7 p-1 rounded">
                      <div className="relative shrink-0 size-5 p-0 flex items-center">
                        <img
                          src="/assets/icons/sparkle.svg"
                          alt="Best choice"
                          width={15}
                          height={15}
                          className="w-3.75 h-3.75"
                        />
                      </div>
                      <div className="px-1">
                        <p className="font-open-sauce font-semibold text-xs leading-3.5 text-info-500 uppercase tracking-[0.0625rem] whitespace-nowrap">
                          {row.tag}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </AnimateOnView>
        ))}
      </div>
    </div>
  );
}
