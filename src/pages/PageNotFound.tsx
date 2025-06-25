import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export function PageNotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl">404: Page Not Found</h1>
      <div className="mt-4">
        Go back to{" "}
        <NavLink to={ROUTES.COURSES} className="underline">
          HOME
        </NavLink>
      </div>
    </div>
  );
}
