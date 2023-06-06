import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
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
