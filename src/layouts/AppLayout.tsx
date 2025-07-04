import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../constants/routes";
import { AppSidebar } from "../components/AppSidebar";
import HeaderRight from "../components/HeaderRight";
import { PageLayout } from "./PageLayout";
import { useAppSelector } from "../app/hooks";
import { initialised, isAuthenticated } from "../features/user/selectors";

export function AppLayout() {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const isAuth = useAppSelector(isAuthenticated);
  const isInit = useAppSelector(initialised);

  useEffect(() => {
    if (isInit && !isAuth) {
      navigate(ROUTES.LOGIN);
    }
  }, [isInit, isAuth]);

  return (
    <div className="flex bg-white h-full">
      <AppSidebar />
      <div className="flex-grow overflow-y-auto">
        <PageLayout heading={user?.role} headerRight={<HeaderRight />}>
          {isAuth && <Outlet />}
        </PageLayout>
      </div>
    </div>
  );
}
