interface Course {
  name: string;
  imagePath: string;
  url: string;
}

export default function CourseCard({ course, isBlocked = false }: {course: Course, isBlocked?: boolean}) {
  return (
    <div className = "courseCard" style = {course.name !== "Математика" && course.name !== "Русский язык" ? {marginLeft: "1.3rem"}: undefined}>
      {isBlocked && <div className = "soonDiv"> 
        {isBlocked === true ? (
          <div className = "blockedInner">
            <img
              src = {process.env.PUBLIC_URL + "/small/lock.png"}
              className = "lockImage"
              alt = "Locked"
            />
            <p className = "soonText"> СКОРО </p>
          </div>
        ) : undefined}
      </div>}

      <img
        src = {process.env.PUBLIC_URL + course.imagePath}
        alt = "Error in loading"
      />      
      <p className = "courseName"> {course.name} </p>
      <div className = "courseSignUpDiv">
        <button className = "courseSignUp" style = {course.name !== "Математика" && course.name !== "Информатика" ? {cursor: "not-allowed"} : {cursor: "pointer"}}> записаться </button>
        {/* TODO: For the future, line below should be used */}
        {/* <Link to = {course.url} className = "courseSignUp" style = {course.name !== "Математика" && course.name !== "Информатика" ? {cursor: "not-allowed"} : {cursor: "pointer"}}> записаться </Link> */}
      </div>
    </div>
  )
}