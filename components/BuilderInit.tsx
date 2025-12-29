"use client";

import { useEffect } from "react";
import { builder } from "@builder.io/sdk";

// Import the registry to register all custom components
import "../builder-registry";

export default function BuilderInit() {
  useEffect(() => {
    // Initialize Builder with API key
    if (process.env.NEXT_PUBLIC_BUILDER_API_KEY) {
      builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
    }
  }, []);

  return null;
}
