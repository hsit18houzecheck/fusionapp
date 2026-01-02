"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { QUERY_KEYS } from "@/common/constants";

export type LeadPayload = {
  first_name: string;
  last_name: string;
  email: string;
  property_postcode: string;
  u_message: string;
  u_channel: string;
  contact_number: string;
  userKey?: string;
  business_phone: string;
  u_property_postcode: string;
  web_stage: string;
  u_utm_source: string;
  u_utm_medium: string;
  u_utm_campaign: string;
  u_utm_term: string;
  gclid: string;
};

export const useCreateLead = () =>
  useMutation({
    mutationFn: ({ body }: { body: LeadPayload }) =>
      apiClient.post(
        `${window.location.origin}/api/track-and-create-lead`,
        body
      ),
  });

export const useGetAddresses = (postcode: string) => {
  const params = { postcode };

  return useQuery({
    queryKey: [QUERY_KEYS.OLD_WEBSITE.ADDRESS, params],
    queryFn: () =>
      apiClient(
        `https://api.getAddress.io/find/${postcode}?api-key=${process.env.NEXT_PUBLIC_API_ADDRESS_TOKEN}`,
        { params }
      ),
    enabled: !!postcode,
    retry: 2,
  });
};
