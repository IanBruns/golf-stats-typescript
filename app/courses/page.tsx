import Image from 'next/image';

import { Course } from '../types';
import { getCourses } from './api';
import CreateEvent from './CreateEvent';

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <>
      <h1>All Events</h1>
      <div className="w-full flex justify-center items-center flex-wrap">
        {courses?.items?.map((course: Course) => (
          <div
            key={course.id}
            className="border-1 border-solid border-black flex justify-center items-center flex-col p-3 min-w-[140px] m-2"
          >
            <Image src="/golf-310994_640.png" height={25} width={25} alt="" />
            <p>{course.matchName}</p>
          </div>
        ))}
      </div>
      <CreateEvent />
    </>
  );
}
