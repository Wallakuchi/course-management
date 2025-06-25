import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { ROUTES } from "./constants/routes";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { AuthProvider } from "./contexts/AuthProvider";
import { AppLayout } from "./layouts/AppLayout";
import Playlists from "./pages/Playlists";
import Contents from "./pages/Contents";
import { Logout } from "./pages/Logout";
import { AppProvider } from "./contexts/AppProvider";
import Settings from "./pages/Settings";
import PlaylistsDetails from "./pages/Playlists-Deatails";
import { Courses } from "./pages/Courses";
import CourseVideos from "./pages/CourseVideos";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: ROUTES.PLAYLISTS,
          element: <Playlists />,
        },
        {
          path: ROUTES.CONTENTS,
          element: <Contents />,
        },
        {
          path: ROUTES.SETTING,
          element: <Settings />,
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
  return (
    <AppProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AppProvider>
  );
}
