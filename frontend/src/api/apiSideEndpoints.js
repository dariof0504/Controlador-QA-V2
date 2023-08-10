import { sliceSideReducer } from "./slideSide";

export const apiSide = sliceSideReducer.injectEndpoints({
  endpoints: (builder) => ({
    test: builder.query({
      query: (cred) => ({
        url: "home",
        method: "GET",
        body: { ...cred },
      }),
    }),
    sideFilter: builder.mutation({
      query: (cred) => ({
        url: "sideFilter",
        method: "POST",
        body: { ...cred },
      }),
    }),
    saveRutina: builder.mutation({
      query: (cred) => ({
        url: "save",
        method: "POST",
        body: { ...cred },
      }),
    }),
    listRutinas: builder.query({
      query: () => ({
        url: "/list",
        method: "GET",
      }),
    }),
    listIndividualRutina: builder.query({
      query: (pk_id_rutina) => ({
        url: `/list/${pk_id_rutina}`,
        method: "GET",
      }),
    }),
    editRutinaIndividual: builder.mutation({
      query: (rutina) => ({
        url: "edit",
        method: "PUT",
        body: { ...rutina },
      }),
    }),
  }),
});

export const {
  useTestQuery,
  useSideFilterMutation,
  useSaveRutinaMutation,
  useListRutinasQuery,
  useListIndividualRutinaQuery,
  useEditRutinaIndividualMutation,
} = apiSide;
