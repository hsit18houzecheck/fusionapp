import Image from "next/image";

const RICS = () => {
  return (
    <div className="bg-light-blue-old py-24">
      <div className="max-w-[1250px] mx-auto px-10 bg-white rounded-3xl p-8 text-center">
        <div className="relative flex justify-center">
          <div className="absolute border left-[10%] top-[50%] w-4/5"></div>
          <Image
            src="/assets/images/old-website/rics-logo.webp"
            alt="rics logo"
            width={190}
            height={117}
            className="z-10"
          />
        </div>
        <p className="text-dark-blue text-base">
          All our surveyors are regulated by the Royal Institution of Chartered
          Surveyors (RICS). As a business we comply with the highest standards
          of service and professionalism in the UK property industry.
        </p>
      </div>
    </div>
  );
};

export default RICS;
