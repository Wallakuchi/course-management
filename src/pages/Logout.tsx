import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuthContext } from "../contexts/AuthProvider";

export function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  useEffect(() => {
    logout();
    navigate(ROUTES.LOGIN);
  }, [logout, navigate]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-3xl">Please wait...</h1>
    </div>
  );
}
