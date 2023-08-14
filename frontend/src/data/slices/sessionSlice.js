const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  titulo: "",
  pk_id_session: "",
  targetURL: "",
  rutinasPorEjecutar: [],
  isEdit: false,
};

const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState,
  reducers: {
    setInstanceSession: (state, { payload }) => {
      const { instance, value } = payload;

      state[instance] = value;
    },
    //Se usa en rutinaTagSession
    addRutinaSession: (state, { payload }) => {
      state.rutinasPorEjecutar =
        state.rutinasPorEjecutar.length > 0
          ? [...state.rutinasPorEjecutar, payload]
          : [payload];
    },
    //Se usa en listRutinasForSession
    deleteRutinaSession: (state, { payload }) => {
      const newSession = state.rutinasPorEjecutar.filter(
        (e) => e.id !== payload
      );

      state.rutinasPorEjecutar = newSession;
    },
    setSession: (state, { payload }) => {
      const llaves = Object.keys(payload);
      llaves.map((llave) => (state[llave] = payload[llave]));
    },
    setIsEditSession: (state, {payload}) => {
      state.isEdit = payload
    },
    deleteAllSessionInfo: (state) => {
      const llaves = Object.keys(initialState)
      llaves.map((llave) => state[llave] = initialState[llave])
    }
  },
});

export const {
  setInstanceSession,
  addRutinaSession,
  deleteRutinaSession,
  setSession,
  setIsEditSession,
  deleteAllSessionInfo
} = sessionSlice.actions;

export default sessionSlice.reducer;
