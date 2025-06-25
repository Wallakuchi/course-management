import { http } from "msw";
import { resolveApiUrl } from "../../utils";
import { API_URLS } from "../../constants/apiUrls";
import {
  courseMockData,
  courseMockDataAfterDelete,
} from "../data/coursesMockData";

export const courseHandler = [
  http.get(resolveApiUrl(API_URLS.courses), courseMockData),
  http.delete(resolveApiUrl(API_URLS.deleteLesson), courseMockDataAfterDelete),
];
