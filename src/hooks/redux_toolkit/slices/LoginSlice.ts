import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  userName: string;
  password: string;
}

const initialState: LoginState = {
  userName: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateLoginState(state, action: PayloadAction<LoginState>) {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
    },
  },
});

export default loginSlice.reducer;
export const { updateLoginState } = loginSlice.actions;
