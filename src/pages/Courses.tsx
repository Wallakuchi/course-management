import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useAppContext } from "../contexts/AppProvider";
import { ROUTES } from "../constants/routes";
import { BiSearch } from "react-icons/bi";
import { useCallback, useEffect, useState, type ChangeEvent } from "react";
import type { IAppContext } from "../types";
import { useAuthContext } from "../contexts/AuthProvider";

export function Courses() {
  const [courses, setCourses] = useState<IAppContext[]>();
  const { allCourses } = useAppContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  const handleViewPlaylists = useCallback((id: string) => {
    navigate(ROUTES.COURSE_DEATAILS, { state: { id } });
  }, []);

  const handleSearchCourse = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const regex = new RegExp(e.target.value, "i");
      const filteredCourse = allCourses.filter(
        (course) => course.title.search(regex) !== -1
      );

      setCourses(filteredCourse);
    },
    [allCourses]
  );

  return (
    <div className="">
      {/* add course for admin only */}
      {isAdmin && (
        <div className="flex justify-end -mt-8">
          <Button>Add Course</Button>
        </div>
      )}

      {/* all courses */}
      <div className="flex justify-between mt-4 border-b-2 border-b-gray-300 py-2">
        <h1 className="  text-2xl">All Courses</h1>
        {/* search bar */}
        <div className="flex justify-center">
          <div className="max-w-[350px] border border-gray-200 rounded-sm px-4 py-1.5 flex items-center justify-center bg-gray-100">
            <input
              type="text"
              name="course"
              id="course"
              className="outline-none min-w-[300px] text-gray-600"
              placeholder="search here..."
              onChange={handleSearchCourse}
            />
            <button className="cursor-pointer">
              <BiSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-4 gap-4">
        {courses &&
          courses.length > 0 &&
          courses.map((course) => (
            <div
              key={course.id}
              className="flex p-4 flex-col gap-y-4 text-white border rounded-xl min-w-[250px] min-h-[200px] bg-linear-to-t from-gray-400 to-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex gap-x-4">
                <img
                  src="/images/pic-3.jpg"
                  alt="tutor-image"
                  className="h-10 rounded-full"
                />
                <div className="flex text-sm flex-col">
                  <p>tutor ABC</p>
                  <p className="text-gray-200 text-xs">2025-12-09</p>
                </div>
              </div>
              <img
                src="/images/courses/sample-1.jpg"
                alt="tutor-image"
                className="rounded-sm"
              />
              <p className="h-10 mb-2">{`Complete ${course.title}`}</p>
              <Button
                size="lg"
                className=""
                onClick={() => handleViewPlaylists(course.id)}
              >
                View Course
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
