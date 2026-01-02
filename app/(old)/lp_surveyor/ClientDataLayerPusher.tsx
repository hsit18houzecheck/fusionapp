"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { ClientDataLayerPusherProps } from "./types";

const ClientDataLayerPusher: React.FC<ClientDataLayerPusherProps> = ({
  eventDatas = [],
}) => {
  useEffect(() => {
    eventDatas.forEach((eventData) => sendGTMEvent(eventData));
  }, [eventDatas]);

  return null;
};

export default ClientDataLayerPusher;
