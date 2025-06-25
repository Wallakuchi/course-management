/* eslint-disable @typescript-eslint/no-explicit-any */
import { delay, HttpResponse } from "msw";

const mockUserData = {
  id: 1,
  name: "Rakesh",
  role: "user",
  designation: "student",
};

const mockAdminData = {
  id: 2,
  name: "Sonia",
  role: "admin",
  designation: "teacher",
};

export const userMockData = async ({ request }: any) => {
  await delay(300);
  const data = await request.json();

  if (data.username === "admin" && data.password === "admin123") {
    return HttpResponse.json(mockAdminData);
  } else if (data.username === "user" && data.password === "user123") {
    return HttpResponse.json(mockUserData);
  }
  return HttpResponse.json(false);
};
