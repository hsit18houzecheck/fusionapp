import Truspilot from "@/components/Trustpilot";

const Testimonial2 = () => {
  return (
    <div className="max-w-[1250px] mx-auto py-24 px-5">
      <h2 className="text-4xl md:text-5xl font-extrabold font-freight text-center mb-4">
        Our customers love us
      </h2>
      <Truspilot type="slider" />
    </div>
  );
};

export default Testimonial2;
