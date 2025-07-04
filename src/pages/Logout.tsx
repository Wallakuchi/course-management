import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/user/userSlice";

export function Logout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-3xl">Please wait...</h1>
    </div>
  );
}
