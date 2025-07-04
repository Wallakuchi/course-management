import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./layouts/AppLayout";
import { Logout } from "./pages/Logout";
import PlaylistsDetails from "./pages/Playlists-Deatails";
import { Courses } from "./pages/Courses";
import CourseVideos from "./pages/CourseVideos";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { fetchCourse } from "./features/course/courseSlice";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Courses />,
        },
        {
          path: ROUTES.COURSES,
          element: <Courses />,
        },
        {
          path: ROUTES.COURSE_DEATAILS,
          element: <PlaylistsDetails />,
        },
        {
          path: ROUTES.COURSE_VIDEOS,
          element: <CourseVideos />,
        },
      ],
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.LOGOUT,
      element: <Logout />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ],
  { basename: import.meta.env.VITE_API_PUBLIC_FOLDER }
);

export function AppRoutes() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCourse());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}
