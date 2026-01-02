import { VisionContent } from "./type";

const Vision = ({ title, description }: VisionContent) => {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto md:max-w-[62.5rem] space-y-8 md:space-y-10 px-6 md:px-10">
        <p className="font-freight font-medium text-foreground text-2xl md:text-[2rem] md:leading-[2rem]">
          {title}
        </p>
        <p
          className="text-muted-foreground text-sm md:text-base whitespace-break-spaces"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  );
};

export default Vision;
