import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const mainUrl = 'http://localhost:4000/'

export const sliceSideReducer = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: mainUrl
    }),
    endpoints: () => ({})
})