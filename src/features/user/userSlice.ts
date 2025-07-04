import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ILoginData, IUser, IUserInitialState } from "../../types";
import { loginUser } from "../../services/loginUser";

const initialState: IUserInitialState = {
  loading: false,
  user: {} as IUser,
  error: "",
};

// Check localStorage at load
const userFromStorage = localStorage.getItem("user");
if (userFromStorage) {
  initialState.user = JSON.parse(userFromStorage);
}

export const fetchUsers = createAsyncThunk<IUser, ILoginData>(
  "user/fetchUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await loginUser(payload);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.loading = false;
        state.user = action.payload as IUser;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = {} as IUser;
      state.error = action.error.message || "Something went wrong";
    });
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // persist to localStorage
    },
    logout: (state) => {
      state.user = {} as IUser;
      localStorage.removeItem("user"); // clear on logout
    },
  },
  selectors: {},
});

export default userSlice.reducer;
export const { setUser, logout } = userSlice.actions;
