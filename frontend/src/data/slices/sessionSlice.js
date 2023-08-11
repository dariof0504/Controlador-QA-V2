const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  titulo: "",
  pk_id_session: "",
  rutinasPorEjecutar: [],
};

const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState,
  reducers: {
    setInstanceSession: (state, { payload }) => {
      const { instance, value } = payload;

      state[instance] = value;
    },
    addRutinaSession: (state, { payload }) => {
      state.rutinasPorEjecutar =
        state.rutinasPorEjecutar.length > 0
          ? [...state.rutinasPorEjecutar, payload]
          : [payload];
    },
    deleteRutinaSession: (state, { payload }) => {
      const newSession = state.rutinasPorEjecutar.filter(
        (e) => e.pk_id_rutina !== payload
      );

      state.rutinasPorEjecutar = newSession;
    },
  },
});

export const { setInstanceSession, addRutinaSession, deleteRutinaSession } =
  sessionSlice.actions;

export default sessionSlice.reducer;
