import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    refetchOnFocus: false,
    tagTypes: ["Posts"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<{
            id: number,
            userId: number,
            title: string
        }[], null>({
            query: () => "posts",
            providesTags: [{ type: "Posts", id: "LIST" }],
        })
    }),
});

export const { useGetPostsQuery } = postApi;
