import OverlayCardsClient from "./Client";
import type { OverlayCardsContent } from "./types";

type OverlayCardsProps = OverlayCardsContent;

export default function OverlayCards(props: OverlayCardsProps) {
  return <OverlayCardsClient {...props} />;
}
