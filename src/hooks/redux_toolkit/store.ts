import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/AppSlice";
import UserSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    UserSlice: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
