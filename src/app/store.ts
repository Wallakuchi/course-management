import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import courseReducer from "../features/course/courseSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    courses: courseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
