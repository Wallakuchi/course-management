import type { RootState } from "../../app/store";
import { ADMIN } from "../../constants";

export const isAuthenticated = (state: RootState): boolean =>
  !!(state.user.user && state.user.user.id);

export const initialised = (state: RootState): boolean =>
  !!(state.user.user && state.user.user.id ? false : true);

export const CheckIfAdmin = (state: RootState): boolean =>
  !!(state.user.user.role === ADMIN ? true : false);
