import { cn } from "@/lib/utils";
import ProviderCell from "./ProviderCell";
import { RowItemProps } from "./types";
import ValueCell from "./ValueCell";
import { GRID } from "./constants";
import Image from "next/image";

const RowItem = ({ row, columns, isLast }: RowItemProps) => {
  if (row.isBest) {
    return (
      <div
        className={`${GRID} bg-primary relative -mx-4 px-1 md:px-4 shadow-2xl rounded-2xl`}
      >
        <div className="bg-info-100 rounded absolute left-2 md:left-[inherit] md:right-[0.625rem] top-2 md:top-[0.625rem] px-2 py-1 flex items-center space-x-1">
          <div className="w-[0.925rem] h-[0.925rem] md:w-5 md:h-5 relative">
            <Image
              src="/assets/images/asterisk-teal.svg"
              fill
              className="object-cover"
              alt="best-icon"
            />
          </div>
          <p className="text-info-500 font-semibold text-xs">BEST</p>
        </div>

        <ProviderCell logo={row.logo} name={row.name} variant="best" />

        {columns.map((col) => (
          <ValueCell
            key={col.value}
            value={(row as any)[col.value]}
            variant="best"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(`${GRID} bg-transparent border-b-primary`, {
        "border-b": !isLast,
      })}
    >
      <ProviderCell logo={row.logo} name={row.name} variant="normal" />
      {columns.map((col) => (
        <ValueCell
          key={col.value}
          value={(row as any)[col.value]}
          variant="normal"
        />
      ))}
    </div>
  );
};

export default RowItem;
