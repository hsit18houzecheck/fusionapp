import VideoCard from ".";
import { SectionWrapper } from "../SectionWrapper";
import { VideoCardSectionContent } from "./types";

const VideoCardSection = ({
  sectionHeader: { eyebrow, title, subheading },
  video,
}: VideoCardSectionContent) => {
  return (
    <SectionWrapper
      className="py-12 md:py-20 bg-white-100"
      eyebrow={
        eyebrow ? { ...eyebrow, style: { color: eyebrow.color } } : undefined
      }
      title={title ? { ...title, style: { color: title.color } } : undefined}
      subtitle={
        subheading
          ? { ...subheading, style: { color: subheading.color } }
          : undefined
      }
      headingClassName="max-w-7xl mx-auto my-0"
    >
      <div className="h-[33.125rem] md:h-[52.125rem]">
        <VideoCard {...video} />
      </div>
    </SectionWrapper>
  );
};

export default VideoCardSection;
