import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { IAppContext, IChildren } from "../types";
import { getCourses } from "../services/getCourses";

interface IContext {
  allCourses: IAppContext[];
  fetchAllCourses: () => void;
}
const AppContext = createContext<IContext>({
  allCourses: [],
  fetchAllCourses: () => [],
});

export const AppProvider = ({ children }: IChildren) => {
  const [allCourses, setAllCourses] = useState<IAppContext[]>([]);

  const fetchAllCourses = useCallback(async () => {
    try {
      const res = await getCourses();
      if (res && res.length > 0) {
        setAllCourses(res);
      }
      return res;
    } catch (error) {
      console.log("error while fetching courses : ", error);
    }
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      await fetchAllCourses();
    };
    fetchCourses();
  }, [fetchAllCourses]);

  const providerValues = useMemo(
    () => ({
      allCourses,
      fetchAllCourses,
    }),
    [allCourses, fetchAllCourses]
  );

  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
