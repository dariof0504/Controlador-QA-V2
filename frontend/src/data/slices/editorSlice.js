import { createSlice } from "@reduxjs/toolkit";
import { clickPropierties, typePropierties } from "../defaultProps";
import uuid from "react-uuid";

const updateIndex = (comando, comandos) => {
  const index = comandos.indexOf(comando);

  const result = { ...comando, index };

  return result;
};

const editorComponentSlice = createSlice({
  name: "editorComponent",
  initialState: {
    titulo: "",
    servicio: "",
    numeroAcciones: 0,
    targetURL: "",
    id: "",
    //Estos son los que se han utilizado antes
    comandos: [],
    comandoIndividual: {}
  },
  reducers: {
    //Funcion para seleccionar un comando para editar
    selectComandoIndividual: (state, { payload }) => {
      const index = payload;

      state.comandoIndividual = state.comandos[index];
    },
    saveSelectComanddoIndividual: (state, { payload }) => {
      state.comandoIndividual = payload;
    },
    deselectComandoIndividual: (state) => {
      state.comandoIndividual = {};
    },
    //Funcion para eliminar comandos
    deleteComandos: (state, { payload }) => {
      const index = payload;

      const newComandos = state.comandos.filter((e) => e.index !== index);

      const result = newComandos.map((c) => updateIndex(c, newComandos));

      state.comandos = result;
    },
    //Funcion para añadir comandos
    addComandos: (state, { payload }) => {
      const comando = payload;

      const newComando = {
        ...comando,
        propClick: clickPropierties,
        propType: typePropierties,
      };

      const newComandos =
        state.comandos.length > 0
          ? [...state.comandos, newComando]
          : [newComando];

      const result = newComandos.map((c) => updateIndex(c, newComandos));

      state.comandos = result;
    },
    //Funcion para guardar cambios de comando editado
    setComandos: (state) => {
      const index = state.comandoIndividual.index;

      const result = { ...state.comandoIndividual };

      const newComandos = state.comandos.map((comando) =>
        comando.index === index ? result : comando
      );

      state.comandos = newComandos;
    },
    //Funcion para establecer los comandos iniciales
    setRutina: (state, { payload }) => {
      const llaves = Object.keys(payload);
      llaves.map((llave) => {
        state[llave] = payload[llave];
      });

      state.id = uuid()

    },
    //Funcion para cambiar el estado de una instancias en especifico
    setInstanceRutina: (state, {payload}) => {
      const { instance, value } = payload

      state[instance] = value
    }
  },
});

export const {
  //Funciones para los comandos
  addComandos,
  deleteComandos,
  setComandos,
  //Funciones para el comando en edicion
  selectComandoIndividual,
  deselectComandoIndividual,
  saveSelectComanddoIndividual,
  //Funciones para el cambio del estado de la rutina
  setRutina,
  setInstanceRutina
} = editorComponentSlice.actions;

export default editorComponentSlice.reducer;
