import Image from "next/image";
import type { ListViewProps } from "../types";

const List = ({ img, txt, highlightTxt, boldTxt }: ListViewProps) => {
  return (
    <div className="flex items-center my-5">
      <Image src={img} width={33} height={33} alt="" />
      <p
        className="text-lg ml-4"
        dangerouslySetInnerHTML={{
          __html: txt
            .replace(
              highlightTxt ?? "",
              `<span class="underline">${highlightTxt ?? ""}</span>`
            )
            .replace(
              boldTxt ?? "",
              `<span class="font-bold">${boldTxt ?? ""}</span>`
            ),
        }}
      />
    </div>
  );
};

export default List;
