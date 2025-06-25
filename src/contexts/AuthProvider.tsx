import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { IChildren, IUser } from "../types";
import { ADMIN } from "../constants";

interface IAuthContext {
  user?: IUser;
  token?: string;
  addUser: (user: IUser) => void;
  initialised: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  token: undefined,
  addUser: () => null,
  initialised: false,
  isAuthenticated: false,
  isAdmin: false,
  logout: () => null,
});

export const AuthProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser>();
  const [initialised, setInit] = useState(false);

  const addUser = useCallback((_user: IUser) => {
    localStorage.setItem("user", JSON.stringify(_user));
    setUser(_user);
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUser(undefined);
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("user");
    if (item) {
      const user = JSON.parse(item);
      addUser(user);
    } else {
      setInit(true);
      logout();
    }
  }, [addUser, logout]);

  const isAuthenticated = useMemo(() => {
    if (user && user.id) {
      return true;
    }
    return false;
  }, [user]);

  const isAdmin = useMemo(
    () => (user?.role === ADMIN ? true : false),
    [user?.role]
  );

  const providerValues = useMemo(() => {
    return {
      user,
      addUser,
      isAdmin,
      initialised,
      isAuthenticated,
      logout,
    };
  }, [user, addUser, isAdmin, initialised, isAuthenticated, logout]);

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useToken = () => {
  const { token } = useContext(AuthContext);
  return token;
};
