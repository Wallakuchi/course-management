import { API_URLS } from "../constants/apiUrls";
import { resolveApiUrl } from "../utils";

export async function deleteLesson(
  courseId: string,
  lessonId: string
): Promise<boolean> {
  const url = resolveApiUrl(API_URLS.deleteLesson);

  try {
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify({ courseId, lessonId }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("login user service error", error);
    return false;
  }
}
