import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export type EstimatorInfoParams = {
  postcode: string;
  age?: number;
  property_value?: number;
};

export type EstimatorInfoResponse = {
  total_low: number;
  total_high: number;
  jobs: number;
  defects: {
    category: string;
    defects: {
      defect: string;
      cost_low: string;
      cost_high: string;
      unit: string;
    }[];
  }[];
};

export const useEstimatorInfo = (params: EstimatorInfoParams) =>
  useQuery<EstimatorInfoResponse>({
    queryKey: ["estimator", "info", params],
    queryFn: async () => {
      const res = await apiClient.get("api/v1/estimator", { params });
      return res.data as EstimatorInfoResponse;
    },
    staleTime: 60_000,
    refetchOnWindowFocus: false,
    enabled: false,
  });
