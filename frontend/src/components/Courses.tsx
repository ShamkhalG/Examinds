import { coursesList } from "../assets/courseData"
import CourseCard from "./courses/CourseCard"
import "../styles/courses.css"

export default function Courses() {
  const upperCourses = coursesList.slice(0, 2);
  const lowerCourses = coursesList.slice(2, 6);
  return (
    <div className = "courses">
      <div className = "coursesDiv">
        {upperCourses.map((course, index) => (
          <CourseCard
            key = {index}
            course = {course}
            />
        ))}

        <p className = "hurryUp"> 
        УСПЕЙ
        <span style = {{color: "#F66D25"}}>ЗАПИСАТЬСЯ</span>
        </p>
      </div>

      <div className = "coursesDivBlocked">
        {lowerCourses.map((course, index) => (
          <CourseCard
            key = {index}
            course = {course}
            isBlocked = {true}
          />
        ))}
      </div>
    </div>
  )
}