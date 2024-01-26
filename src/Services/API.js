import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleAPI = createApi({
    tagTypes: ['articles'], // on définit un type de tag
    reducerPath: 'articleAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => `articles`,
            providesTags: ['articles'] // on set le tag sur la query
        }),
        createArticle: builder.mutation({
            query: (data) => ({
                url: '/articles',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['articles'] // on invalide le tag sur la mutation

        })
    }),
})

export const { useGetArticlesQuery, useCreateArticleMutation } = articleAPI

export const productAPI = createApi({
    tagTypes: ['products'],
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
            providesTags: ['products']
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['products']
        })
    }),
})

export const { useGetProductsQuery, useCreateProductMutation } = productAPI

export const commentsAPI = createApi({
    tagTypes: ['comments'],
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (productId) => `products/${productId}/comments`,
            providesTags: ['comments']
        }),
        createComment: builder.mutation({
            query: ({ productId, ...data }) => ({
                url: `products/${productId}/comments`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['comments']
        })
    }),
})

export const { useGetCommentsQuery, useCreateCommentMutation } = commentsAPI

