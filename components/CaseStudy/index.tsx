import CaseStudyClient from "./Client";
import type { CaseStudyProps } from "./types";

export default function CaseStudy({ content, caseStudies }: CaseStudyProps) {
  return (
    <CaseStudyClient
      content={content}
      caseStudies={caseStudies}
    />
  );
}
