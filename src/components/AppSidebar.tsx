import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Menu } from "./Menu";
import { MdOutlinePlaylistPlay, MdLogout } from "react-icons/md";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { useAuthContext } from "../contexts/AuthProvider";
// import { Button } from "./Button";
import { useMemo } from "react";

export const AppSidebar = () => {
  const { user } = useAuthContext();

  const menus = useMemo(
    () => [
      {
        to: ROUTES.HOME,
        icon: <FaHome />,
        label: "Home",
        showMenuItem: false,
      },
      {
        to: ROUTES.PLAYLISTS,
        icon: <MdOutlinePlaylistPlay />,
        label: "Playlists",
        showMenuItem: false,
      },
      {
        to: ROUTES.CONTENTS,
        icon: <FaGraduationCap />,
        label: "Contents",
        showMenuItem: false,
      },
      {
        to: ROUTES.COURSES,
        icon: <FaGraduationCap />,
        label: "Courses",
        showMenuItem: true,
      },
      {
        to: ROUTES.LOGOUT,
        icon: <MdLogout />,
        label: "Logout",
        showMenuItem: true,
      },
    ],
    []
  );
  return (
    <div className="bg-gray-100 shrink-0 h-full w-[240px] text-gray-900 noprint hidden md:block">
      <NavLink to={ROUTES.HOME}>
        <div className="flex flex-col gap-y-0 justify-center items-center p-4 ">
          <img
            src="/images/pic-2.jpg"
            alt="user-image"
            className="h-20 rounded-full"
          />
          <p className="text-sm font-semibold">{user?.name}</p>
          <p className="text-xs">{user?.designation}</p>
          {/* <Button size="md" className=" mt-1.5">
            View Profile
          </Button> */}
        </div>
      </NavLink>
      <Menu items={menus} />
    </div>
  );
};
