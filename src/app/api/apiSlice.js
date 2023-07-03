import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    // const token = getState().auth.token;
    const token = Cookies.get("_accToken");

    if (token) headers.set("token", `${token}`);

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Pesantren"],
  endpoints: (builder) => ({
    getPesantren: builder.query({
      query: () => "/pesantren",
      providesTags: ["Pesantren"],
    }),
    getPesantrenById: builder.query({
      query: (id) => ({ url: `/pesantren/${id}` }),
      providesTags: ["Pesantren"],
    }),
    addPesantren: builder.mutation({
      query: (pesantren) => ({
        url: "/pesantren",
        method: "POST",
        body: pesantren,
      }),
      invalidatesTags: ["Pesantren"],
    }),
    deletePesantren: builder.mutation({
      query: (id) => ({
        url: `/pesantren/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Pesantren"],
    }),
    loginUser: builder.mutation({
      query: (userCredential) => ({
        url: "/login",
        method: "POST",
        body: userCredential,
      }),
    }),
    registerUser: builder.mutation({
      query: (userCredential) => ({
        url: "/signup",
        method: "POST",
        body: userCredential,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        body: "",
      }),
    }),
  }),
});

export const {
  useGetPesantrenQuery,
  useGetPesantrenByIdQuery,
  useAddPesantrenMutation,
  useDeletePesantrenMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = apiSlice;
