"use client";

import { setCookies } from "@/common/cookies";
import { useEffect } from "react";

interface ClientCookieSetterProps {
  cookieKey: string;
  cookieVal: string;
}

const ClientCookieSetter: React.FC<ClientCookieSetterProps> = ({
  cookieKey,
  cookieVal,
}) => {
  useEffect(() => {
    setCookies(cookieKey, cookieVal);
  }, [cookieKey, cookieVal]);

  return null;
};

export default ClientCookieSetter;
