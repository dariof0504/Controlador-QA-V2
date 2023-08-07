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
  },
});

export const { uploadFile } = uploadSlice.actions;

export default uploadSlice.reducer;
