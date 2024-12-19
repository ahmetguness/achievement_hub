import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = "parent" | "teacher" | "student";

interface AppState {
  userType: UserType;
}

const initialState: Readonly<AppState> = {
  userType: "parent",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
  },
});

export const { updateUserType } = appSlice.actions;

export default appSlice.reducer;
