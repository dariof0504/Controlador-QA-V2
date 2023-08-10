import { configureStore } from '@reduxjs/toolkit'
import { sliceSideReducer } from '../api/slideSide'
import editorComponentReducer from './slices/editorSlice'
import uploadReducer from './slices/uploadSlice'
import sessionReducer from './slices/sessionSlice'
import estresReducer from './slices/estresSlice'

export const store = configureStore({
    reducer: {

        [sliceSideReducer.reducerPath] : sliceSideReducer.reducer,
        editorComponentReducer: editorComponentReducer,
        uploadReducer: uploadReducer,
        sessionReducer : sessionReducer,
        estresReducer: estresReducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliceSideReducer.middleware),
})