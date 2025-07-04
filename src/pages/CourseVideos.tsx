import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export default function CourseVideos() {
  const { id: selectedCourseId } = useLocation().state;
  const { courses: allCourses } = useAppSelector((state) => state.courses);

  const selectedCourse = useMemo(
    () => allCourses.find((course) => course.id === selectedCourseId),
    [allCourses, selectedCourseId]
  );
  return (
    <div>
      {/* course vidos */}
      <h1 className="py-2 border-b-2 border-b-gray-300 text-2xl mt-8">
        Course videos
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 py-4 gap-4">
        {selectedCourse?.lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="flex flex-col gap-y-4 bg-gray-600 p-4 rounded-lg"
          >
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/HcOc7P5BMi4?si=MLdowa-y7VBi4Ovh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <p className="py-1 text-white">{lesson.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
