import Image from "next/image";

const Section6 = () => (
  <div className="bg-white px-5 py-12 md:px-28 md:py-28">
    <div className="max-w-6xl mx-auto text-white flex flex-col items-center bg-light-blue-old rounded-lg px-5 py-8 md:px-28 md:py-28 md:pb-12 md:pt-8">
      <div className="flex items-center w-full">
        <div className="h-[2px] bg-black flex-1" />
        <div className="relative w-[120px] h-[70px] md:w-[220px] md:h-[200px]">
          <Image
            className="object-contain"
            fill
            alt="Rics Logo"
            src="/assets/images/old-website/rics-logo.png"
          />
        </div>
        <div className="h-[2px] bg-black flex-1" />
      </div>
      <p className="text-sm md:text-lg text-black whitespace-break-spaces text-center mt-4">
        {
          "All our surveyors are regulated by the Royal Institution of Chartered Surveyors (RICS).\nAs a business we comply with the highest standards of service and professionalism in the UK property industry."
        }
      </p>
    </div>
  </div>
);

export default Section6;
