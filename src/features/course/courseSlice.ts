import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IAppContext } from "../../types";
import { getCourses } from "../../services/getCourses";

interface ICourseInitialState {
  loading: boolean;
  courses: IAppContext[];
  error: string;
}

const courseInitialState: ICourseInitialState = {
  loading: false,
  courses: [],
  error: "",
};

export const fetchCourse = createAsyncThunk<IAppContext[]>(
  "course/fetchCourse",
  async () => await getCourses()
);

export const courseSlice = createSlice({
  name: "course",
  initialState: courseInitialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCourse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCourse.rejected, (state, action) => {
      state.loading = false;
      state.courses = [];
      state.error = action.error.message || "Something went wrong!";
    });
  },
  reducers: {},
});

export default courseSlice.reducer;
