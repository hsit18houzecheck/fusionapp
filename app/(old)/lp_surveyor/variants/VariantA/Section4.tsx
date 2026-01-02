import Image from "next/image";
import BackToForm from "./Buttons/BackToForm";

const DATA = [
  { title: "150+", desc: "Surveyors" },
  { title: "1500+", desc: "5 Star Reviews" },
  { title: "40000+", desc: "Surveys and Valuations" },
  { title: "£10\nBillion +", desc: "Worth of Properties Inspected" },
];

const Section4 = () => (
  <div className="bg-primary-old px-5 py-12 md:px-28 md:py-28">
    <div className="max-w-6xl mx-auto text-secondary-old flex flex-col items-center text-center space-y-4">
      <p className="font-freight font-bold text-3xl md:text-5xl">
        {"Submit the form to get a call back today*"}
      </p>
      <p className="text-base md:text-lg">
        {
          "*Our friendly UK customer call centre will call you back before 5.30pm"
        }
      </p>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-2 w-full space-y-8 md:space-y-0">
        {DATA.map((item, index) => (
          <div
            key={index}
            className="relative md:w-[230px] md:h-[252px] w-[163px] h-[181px] flex items-center justify-center"
          >
            <div className="whitespace-break-spaces">
              <p className="font-bold text-3xl md:text-4xl text-secondary-old">
                {item.title}
              </p>
              <p className="text-xs md:text-base">{item.desc}</p>
            </div>
            <Image
              className="object-cover"
              fill
              alt="house border image"
              src="/assets/images/old-website/house-border.svg"
            />
          </div>
        ))}
      </div>
    </div>
    <BackToForm className="mt-8" />
  </div>
);

export default Section4;
