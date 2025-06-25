import { authHandler } from "./authHandler";
import { courseHandler } from "./courseHandler";

export const handlers = [...authHandler, ...courseHandler];
