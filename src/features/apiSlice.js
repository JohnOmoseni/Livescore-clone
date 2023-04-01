import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const footballApi = createSlice({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({
    //  baseUrl: "https://apiv3.apifootball.com/",
    //  prepareHeaders: headers => {
    //    headers.set("apiKey", "9ea6519d1121d8462afef2cc60b975ddc7d3d43830301e59007dcd217bad944c");
    //    return headers;
    //  },
  }),
  endpoints: builder => ({
    fetchEvents: builder.query({
      query: (fromDate, toDate) =>
        `?action=get_events&from=${date}&to=${date}&APIKey=9ea6519d1121d8462afef2cc60b975ddc7d3d43830301e59007dcd217bad944c`,
    }),
    fetchLocalEvents: builder.query({}),
  }),
});

export const { useFetchEventsQuery } = footballApi.actions;
