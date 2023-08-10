const { createSlice } = require("@reduxjs/toolkit");

const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState: { id: "", titulo: "", sessionToExecute: [] },
  reducers: {},
});

export default sessionSlice.reducer;
