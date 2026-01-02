import Image from "next/image";
import type { PropViewProps } from "../types";

const PropView = ({ img, txt, title, list }: PropViewProps) => {
  return (
    <div className="p-4 md:w-1/3">
      <Image
        src={img}
        height={300}
        width={200}
        alt={title}
        className="border border-black rounded-lg mx-auto"
      />
      <p className="my-6 font-semibold text-lg text-center">{title}</p>
      <p className="text-sm">{txt}</p>
      <div className="my-3">
        {list.map((val: string, i: number) => (
          <p className="my-2 text-sm" key={i}>
            - {val}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PropView;
