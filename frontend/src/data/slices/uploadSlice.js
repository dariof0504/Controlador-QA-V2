import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: {
    servicio: "SELENIUM",
    numeroAcciones: 0,
    comandos: [],
    targetURL: "",
  },
};

const uploadSlice = createSlice({
  name: "uploadSlice",
  initialState,
  reducers: {
    uploadFile: (state, { payload }) => {
      state.test = {
        ...state.test,
        comandos: payload.data.commands,
        targetURL: payload.data.targetURL,
        numeroAcciones: payload.data.commands.length,
      };
    },
    //Para eliminar la info cuando se envia
    deleteInfo: (state) => {
      state.test = initialState.test;
    },
  },
});

export const { uploadFile, deleteInfo } = uploadSlice.actions;

export default uploadSlice.reducer;
