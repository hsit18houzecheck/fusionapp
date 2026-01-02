import { SectionWrapper } from "../SectionWrapper";
import AnimateOnView from "../ui/animate-on-view";
import NewsCard from "./NewsCard";
import type { NewsAndUpdate } from "./types";

export default function NewsAndUpdate({
  eyebrow,
  title,
  subtitle,
  news,
}: NewsAndUpdate) {
  return (
    <SectionWrapper
      className="bg-yellow-100"
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      headingClassName="px-6 md:px-0 m-0"
    >
      {/* News Grid */}
      <div className="md:flex md:space-x-12 mx-auto w-full md:p-12">
        {news.map((newsItem, index) => (
          <AnimateOnView
            key={index}
            delay={(3 + index) * 0.15}
            className="md:w-1/2"
          >
            <NewsCard newsItem={newsItem} />
          </AnimateOnView>
        ))}
      </div>
    </SectionWrapper>
  );
}
