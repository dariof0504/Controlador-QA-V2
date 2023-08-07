import { sliceSideReducer } from "./slideSide";

export const apiSide = sliceSideReducer.injectEndpoints({
    endpoints: builder => ({
        test: builder.query({
            query: cred =>  ({
                url: 'home',
                method: 'GET',
                body: {...cred}
            })
        }),
        sideFilter: builder.mutation({
            query: cred => ({
                url: 'sideFilter',
                method: 'POST',
                body: {...cred}
            })
        })
    })
})

export const { useTestQuery, useSideFilterMutation } = apiSide