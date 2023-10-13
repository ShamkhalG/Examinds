import "../styles/teachers.css";
import { teachersList } from "../assets/teachersData";
import TeacherCard from "./teachers/TeacherCard";

export default function Teachers() {
  return (
    <div className = "teachersPart">
      <div className = "ourTeachersDiv">
        <p className = "ourTeachersText"> НАШИ ПРЕПОДАВАТЕЛИ </p>
      </div>

      <div className = "teacherCardsDiv">
        {teachersList.map((teacher, index) => (
          <TeacherCard 
            key = {index}
            teacher = {teacher}
          />
        ))}
      </div>
    </div>
  )
}