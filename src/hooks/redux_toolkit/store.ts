import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import LoginSlice from "./slices/LoginSlice";

const store = configureStore({
  reducer: {
    UserSlice: UserSlice,
    LoginSlice: LoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
