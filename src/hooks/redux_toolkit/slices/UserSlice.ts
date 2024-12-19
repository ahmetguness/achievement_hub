import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../types/SharedTypes";

interface Userstate {
  userType: string;
}

const initialState: Readonly<Userstate> = {
  userType: "parent",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
  },
});

export const { updateUserType } = userSlice.actions;

export default userSlice.reducer;
