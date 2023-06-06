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
      transformResponse: (response, meta) => {
        console.log(meta.response);

        return response;
      },
      providesTags: ["Pesantren"],
    }),
    addPesantren: builder.mutation({
      query: (pesantren) => ({
        url: "/pesantren/add",
        method: "POST",
        body: pesantren,
      }),
      invalidatesTags: ["Pesantren"],
    }),
  }),
});

export const { useGetPesantrenQuery, useAddPesantrenMutation } = apiSlice;
