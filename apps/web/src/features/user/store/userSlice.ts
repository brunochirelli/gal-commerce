import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/userTypes";

export interface UserState {
  user: Partial<User> | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
