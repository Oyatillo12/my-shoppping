import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    tagTypes:['products'],
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: () =>  "/products",
            providesTags:['products']
        }),
        addProducts: builder.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ['products'],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['products'],
        }),
        editProduct: builder.mutation({
            query:({id, ...body}) => ({
                url:`/products/${id}`,
                method:"PUT",
                body,
            }),
            invalidatesTags: ['products']
        })
        
    }),
})

export const {useEditProductMutation, useFetchProductsQuery, useAddProductsMutation, useDeleteProductMutation } = productsApi;