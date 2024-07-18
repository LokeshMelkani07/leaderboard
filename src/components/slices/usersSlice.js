import { createSlice } from "@reduxjs/toolkit";
import generateDummyData from "../../Users";

const usersSlice = createSlice({
  name: "users",
  initialState: generateDummyData(),
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // whenever we add a user, the table gets sorted in the ascending order of score
      // sorting based on score
      state.sort((a, b) => a.score.localeCompare(b.score));
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
