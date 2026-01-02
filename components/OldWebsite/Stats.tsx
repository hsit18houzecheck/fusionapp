import { cn } from "@/lib/utils";
import type { StatsProps } from "./types";

const Stats: React.FC<StatsProps> = ({ children, bgDark = false }) => {
  return (
    <div
      className={cn(
        `py-24`,
        { "bg-light-blue-old text-dark-blue-old": !bgDark },
        { "bg-dark-blue-old text-light-blue-old": bgDark }
      )}
    >
      <div className="max-w-[1250px] px-10 mx-auto">
        {children ? (
          children
        ) : (
          <p className="text-2xl text-center font-1_5 mb-4 font-weight-normal">
            Trusted by thousands of delighted customers
          </p>
        )}
        <div
          className={cn(`md:flex counter justify-between mt-10`, {
            "text-dark-blue": !bgDark,
            "text-white": bgDark,
          })}
        >
          {/* <div className="text-center">
                  <p className="font-3 font-weight-bold">3</p>
                  <p className="font-1_3">Services</p>
                </div> */}
          <div className="text-center my-10">
            <p className="text-4xl md:text-5xl font-bold">150+</p>
            <p className="text-xl md:text-2xl">Surveyors</p>
          </div>
          <div className="text-center my-10">
            <p className="text-4xl md:text-5xl font-bold">1000+</p>
            <p className="text-xl md:text-2xl">5 Star Reviews</p>
          </div>
          <div className="text-center my-10">
            <p className="text-4xl md:text-5xl font-bold">25,000+</p>
            <p className="text-xl md:text-2xl">Surveys and Valuations</p>
          </div>
          <div className="text-center my-10">
            <p className="text-4xl md:text-5xl font-bold">£10 Billion +</p>
            <p className="text-xl md:text-2xl">Worth of Property Inspected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
