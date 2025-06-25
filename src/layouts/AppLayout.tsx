import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import { useEffect } from "react";
import { ROUTES } from "../constants/routes";
import { AppSidebar } from "../components/AppSidebar";
import HeaderRight from "../components/HeaderRight";
import { PageLayout } from "./PageLayout";

export function AppLayout() {
  const { initialised, isAuthenticated, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialised && !isAuthenticated) {
      navigate(ROUTES.LOGIN);
    }
  }, [initialised, isAuthenticated, navigate]);

  return (
    <div className="flex bg-white h-full">
      <AppSidebar />
      <div className="flex-grow overflow-y-auto">
        <PageLayout heading={user?.role} headerRight={<HeaderRight />}>
          {isAuthenticated && <Outlet />}
        </PageLayout>
      </div>
    </div>
  );
}
