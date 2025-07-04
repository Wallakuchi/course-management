import { BiBookmark, BiCalendar } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { Button } from "../components/Button";
import { ROUTES } from "../constants/routes";
import { deleteLesson } from "../services/deleteLesson";
import { useAppSelector } from "../app/hooks";
import { CheckIfAdmin } from "../features/user/selectors";

export default function PlaylistsDetails() {
  const { id: selectedCourseId } = useLocation().state;
  const { courses: allCourses } = useAppSelector((state) => state.courses);
  const isAdmin = useAppSelector(CheckIfAdmin);
  const navigate = useNavigate();

  const selectedCourse = useMemo(
    () => allCourses.find((course) => course.id === selectedCourseId),
    [allCourses, selectedCourseId]
  );

  const handleVideos = useCallback((id: string) => {
    navigate(ROUTES.COURSE_VIDEOS, { state: { id } });
  }, []);

  const handleDeleteLesson = useCallback(
    async (courseId: string, lessonId: string) => {
      await deleteLesson(courseId, lessonId);
    },
    []
  );

  return (
    <div className="flex flex-col gap-y-2">
      {/* course details */}
      <h1 className="py-2 border-b-2 border-b-gray-300 text-2xl">
        Course Details
      </h1>
      <div className="flex gap-x-4 rouded-sm p-4 mt-4 bg-gray-100">
        <div className="flex flex-col gap-y-2">
          <p className="flex gap-x-2 items-center py-2 px-4 rounded-sm bg-gray-300 text-black-400 w-50 hover:bg-gray-400 cursor-pointer">
            <BiBookmark size={20} className="" />
            <span className="">save course</span>
          </p>
          <div className="relative">
            <p className="absolute top-2 left-2 py-2 px-2 rounded-sm bg-red-200 text-black">
              {`${selectedCourse?.lessons.length} chaptors`}
            </p>
            <img
              src="/images/courses/sample-3.jpg"
              alt=""
              className="h-[300px] rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mt-14 max-w-[600px] px-4">
          <div className="flex gap-x-4">
            <img
              src="/images/pic-3.jpg"
              alt="tutor-image"
              className="h-10 rounded-full"
            />
            <div className="flex text-sm flex-col">
              <p>tutor ABC</p>
              <p className="text-xs">{"Teacher"}</p>
            </div>
          </div>
          <p className="font-bold text-2xl">{`Complete ${selectedCourse?.title}`}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            consequuntur sed aliquam, quo pariatur alias ab, repudiandae
            delectus aut laudantium dolorem maiores velit vel iste magnam,
            voluptatibus eius? Quidem, dicta!
          </p>
          <div className="flex items-center gap-x-1.5 mt-2">
            <BiCalendar />
            <p>2025-12-12</p>
          </div>
        </div>
      </div>
      {/* lessons */}
      <h1 className="py-2 border-b-2 border-b-gray-300 text-2xl mt-8">
        Course lessons
      </h1>

      <div className="flex flex-col py-4 gap-4">
        {selectedCourse?.lessons.map((lesson, i) => (
          <div
            key={lesson.id}
            className="flex justify-between bg-gray-200 rounded-lg px-2 py-4 hover:bg-gray-400"
          >
            <p>
              <span className="mr-2">{`${i + 1} -`}</span>
              {lesson.title}
            </p>

            <div className="flex gap-2">
              {isAdmin && (
                <>
                  <Button>Edit</Button>
                  <Button
                    onClick={() =>
                      handleDeleteLesson(
                        selectedCourse.id,
                        lesson.id.toString()
                      )
                    }
                  >
                    Delete
                  </Button>
                </>
              )}
              <Button onClick={() => handleVideos(selectedCourse.id)}>
                Play
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
