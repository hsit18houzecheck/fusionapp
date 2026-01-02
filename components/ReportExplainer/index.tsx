import ReportExplainerClient from "./Client";
import type { ReportExplainerContent } from "./types";

export default function ReportExplainer(props: ReportExplainerContent) {
  return (
    <ReportExplainerClient
      eyebrow={props.eyebrow}
      title={props.title}
      description={props.description}
      tabs={props.tabs}
    />
  );
}

export { ReportExplainerClient };


