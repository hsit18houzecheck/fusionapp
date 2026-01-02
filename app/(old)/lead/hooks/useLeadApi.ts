"use client";

import { useEffect } from "react";
import { QUERY_KEYS } from "@/common/constants";
import { snowApiClient } from "@/lib/apiClient";
import useLeadStore from "@/store/oldWebsite/useLeadStore";
import type { ProductData } from "@/store/oldWebsite/useLeadStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/sonner";

export const useUpdateLead = () => {
  const router = useRouter();

  const handleOnSuccess = ({
    data: { result },
  }: {
    data: { result: unknown };
  }) => {
    console.log(result);
    router.push("/lead/thankyou");
  };

  return useMutation({
    mutationFn: (
      leadData: { leadDetail: { interaction_id: string } } & {
        productData: ProductData;
      }
    ) =>
      snowApiClient.put("houch/hzchek_web_app/web_data", {
        data: { ...leadData.productData, version: 1 },
        interaction_id: leadData.leadDetail.interaction_id,
      }),
    onSuccess: handleOnSuccess,
    retry: false,
  });
};

export const useShowLead = (id: string | null) => {
  // Select the action directly to avoid creating a new object each render,
  // which can cause infinite loops with useSyncExternalStore.
  const updateLead = useLeadStore((state) => state.updateLead);
  const router = useRouter();

  const params = {
    interaction_id: id,
  };

  const query = useQuery({
    queryKey: [QUERY_KEYS.OLD_WEBSITE.LEAD, params],
    queryFn: () =>
      snowApiClient.get("houch/hzchek_web_app/web_data", { params }),
    enabled: true,
    retry: 2,
  });

  useEffect(() => {
    const data = query.data?.data;
    if (data) {
      updateLead({
        loading: false,
        leadDetail: {
          data: data.result,
          interaction_id: id,
          lead_id: data.result.lead_id,
        },
        productData: {
          ...data.result.data,
          currentStep: data.result.data?.currentStep
            ? data.result.data?.currentStep
            : 2,
          property_postcode: data.result.property_postcode,
          u_show_online: data.result.u_show_online,
          quoteData: data.result.data?.quoteData,
          appointment: data.result.data?.appointment,
          callbackStatus: data.result.data?.callbackStatus,
          valuation: data.result.data?.valuation,
        },

        accessDetail: {},
        reportDetail: {},
        errorType: null,
      });
    }
  }, [query.data, id, updateLead]);

  useEffect(() => {
    if (query.error) {
      toast.error("Invalid Interaction Id");
      // router.push("/");
    }
  }, [query.error, router]);

  return query;
};
