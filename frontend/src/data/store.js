import { configureStore } from '@reduxjs/toolkit'
import { sliceSideReducer } from '../api/slideSide'
import editorComponentReducer from './slices/editorSlice'
import uploadReducer from './slices/uploadSlice'

export const store = configureStore({
    reducer: {

        [sliceSideReducer.reducerPath] : sliceSideReducer.reducer,
        editorComponentReducer: editorComponentReducer,
        uploadReducer: uploadReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliceSideReducer.middleware),
})