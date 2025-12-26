import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError } from "axios";
import { AxiosClient } from ".";

type AxiosBaseQueryArgs = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: unknown;
  params?: Record<string, unknown>;
};

export const axiosBaseQuery =
  (client: AxiosClient): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method = "GET", data, params }) => {
    try {
      const result = await client.request({
        url,
        method,
        data,
        params,
      });

      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
