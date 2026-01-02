import Image from "next/image";

const OfflineBox = () => (
  <div className="bg-primary-old rounded-xl text-black w-full md:w-[inherit] md:max-w-[85%] z-10 flex overflow-hidden">
    <div className="relative h-[126px] w-[150px] md:h-[14.5rem] md:w-[16.5rem] shrink-0 -ml-4 -mb-3 md:-mb-6 mt-6">
      <Image
        fill
        alt="Houzecheck logo"
        src="/assets/images/old-website/grab-now.png"
      />
    </div>
    <div className="flex-1 p-4 md:p-6 h-full">
      <div className="flex-1 bg-white flex flex-col items-center rounded-lg border-[2.5px] border-[#E21E2C] p-2 md:p-5 shadow-2xl">
        <p className="p-0 text-secondary-old font-bold text-xs md:text-xl text-center">
          Slots are filling quickly,
          <br />
          secure yours now.
        </p>
        <div className="relative h-[25px] w-[25px] md:h-[40px] md:w-[40px] mt-2">
          <Image
            fill
            alt="Hourglass icon"
            src="/assets/images/old-website/hourglass.svg"
          />
        </div>
      </div>
    </div>
  </div>
);

export default OfflineBox;
