import { API_URLS } from "../constants/apiUrls";
import type { ILoginData, IUser } from "../types";
import { resolveApiUrl } from "../utils";

export async function loginUser(payload: ILoginData): Promise<IUser | false> {
  const url = resolveApiUrl(API_URLS.loginUser);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("login user service error", error);
    return false;
  }
}
