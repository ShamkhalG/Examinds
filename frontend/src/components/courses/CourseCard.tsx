interface Course {
  name: string;
  imagePath: string;
  url: string;
  status: boolean; 
}

export default function CourseCard({ course }: {course: Course}) {
  return (
    <div className = "courseCard" style = {course.name !== "Математика" && course.name !== "Русский язык" ? {marginLeft: "1.3rem"}: undefined}>
     <img
        src = {process.env.PUBLIC_URL + course.imagePath}
        alt = "Error in loading"
      />
      <p className = "courseName"> {course.name} </p>
      <div className = "courseSignUpDiv">
        <button className = "courseSignUp"> записаться </button>
      </div>
    </div>
  )
}