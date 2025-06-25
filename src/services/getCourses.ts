import { API_URLS } from "../constants/apiUrls";
import type { IAppContext } from "../types";
import { resolveApiUrl } from "../utils";

export async function getCourses(): Promise<IAppContext[] | []> {
  const url = resolveApiUrl(API_URLS.courses);

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("login user service error", error);
    return [];
  }
}
