import { generatePath, type Params } from "react-router-dom";
import type { QueryParamType } from "../types";

export function resolveApiUrl(
  path: string,
  params?: Params,
  queryParams?: QueryParamType
): string {
  const apiPath = `${import.meta.env.VITE_API_URL}${generatePath(
    path,
    params
  )}`;
  if (queryParams) {
    return `${apiPath}?${new URLSearchParams(queryParams).toString()}`;
  }
  return apiPath;
}
