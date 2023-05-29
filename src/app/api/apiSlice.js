import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.31.176:3000",
    // prepareHeaders: (headers) => {
    //   headers.set("ngrok-skip-browser-warning", true);
    // },
  }),
  tagTypes: ["Pesantren"],
  endpoints: (builder) => ({
    getPesantren: builder.query({
      query: () => "/pesantren",
      providesTags: ["Pesantren"],
    }),
  }),
});

export const { useGetPesantrenQuery } = apiSlice;
