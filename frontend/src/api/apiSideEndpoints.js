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
        }),
        saveRutina: builder.mutation({
            query: cred => ({
                url: 'save',
                method: 'POST',
                body: {...cred}
            })
        }),
        listRutinas: builder.query({
            query: () => ({
                url: '/list',
                method: 'GET'
            })
        })
    })//
})

export const { useTestQuery, useSideFilterMutation, useSaveRutinaMutation, useListRutinasQuery } = apiSide