import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchQuery: "" };

const searchbarSlice = createSlice({
  name: "searchbar",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = searchbarSlice.actions;
export default searchbarSlice.reducer;
