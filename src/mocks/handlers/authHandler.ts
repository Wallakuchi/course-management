import { http } from "msw";
import { userMockData } from "../data/userMockData";
import { resolveApiUrl } from "../../utils";
import { API_URLS } from "../../constants/apiUrls";

export const authHandler = [
  http.post(resolveApiUrl(API_URLS.loginUser), userMockData),
];
