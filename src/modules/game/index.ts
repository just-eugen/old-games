import { createApi } from "@reduxjs/toolkit/query/react";

import { AxiosClient } from "../axios-client";
import { TGameList } from "./types";
import { axiosBaseQuery } from "../axios-client/baseQuery";

const axiosClient = new AxiosClient(
  "https://69342a414090fe3bf01f241d.mockapi.io/"
);

export const gameApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: axiosBaseQuery(axiosClient),
  endpoints: (builder) => ({
    getAllGames: builder.query<TGameList, void>({
      query: () => ({
        url: "/test",
      }),
    }),
  }),
});

export const { useGetAllGamesQuery } = gameApi;
