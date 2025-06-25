import { useForm } from "react-hook-form";
import type { ILoginData } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../constants/validationSchema";
import { FormRow } from "../components/FormRow";
import { Button } from "../components/Button";
import { loginUser } from "../services/loginUser";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuthContext } from "../contexts/AuthProvider";
import { useEffect } from "react";

export function Login() {
  const { addUser, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginData>({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.COURSES);
    }
  }, [isAuthenticated]);

  const onSubmit = async (loginData: ILoginData) => {
    const res = await loginUser(loginData);

    if (res && res.id) {
      addUser(res);
      navigate(ROUTES.COURSES);
    } else {
      setError("password", {
        type: "custom",
        message: "Incorrect username or password",
      });
    }
  };

  return (
    <div className=" max-w-lg bg-white mt-20 mx-auto p-8 shadow-md rounded">
      <div className="text-center font-bold text-l">Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mt-10">
          <FormRow
            label="Username"
            type="text"
            required
            errors={errors}
            {...register("username")}
          />
          <FormRow
            label="Password"
            type="password"
            required
            errors={errors}
            {...register("password")}
          />
          <div className="flex justify-end">
            <Button type="submit" className="w-max">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
