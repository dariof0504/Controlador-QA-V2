import { createSlice } from '@reduxjs/toolkit'

const executeSlice = createSlice({
    name: 'executeSlice',
    initialState: {
        session: {}
    },
    reducers: {
        setExecuterSession: (state, {payload}) => {
            state.session = payload
        },
        deleteExecuterSession: (state) => {
            state.session = {}
        }
    }
})

export const { setExecuterSession, deleteExecuterSession } = executeSlice.actions

export default executeSlice.reducer