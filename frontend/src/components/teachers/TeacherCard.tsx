interface Teacher {
  fullName: string,
  tags: Array<string>,
  moto: string,
  experience: number,
  obtainedScore: number,
  maximumScore: number
}

export default function TeacherCard({ teacher }: {teacher: Teacher}) {
  return (
    <div className = "singleTeacherCardDiv">
      <div className = "teacherTop">
        <p className = "teacherFullName"> {teacher.fullName} </p>
        
        <div className = "tagsContainer">
          {teacher.tags.map((tag, index) => (
            <p className = "singleTagContainer" style = {index !== 0 ? {marginLeft: "0.625rem"} : undefined}> {tag} </p>
          ))}  
        </div>
      </div>

      <p className = "motoText"> {teacher.moto} </p>

      <div className = "teacherBottom">
        <div className = "experienceSection">
          <p className = "experienceYears"> {teacher.experience} лет </p>
          <p className = "littleText"> Опыт <br /> преподования </p>
          <button className = "individualTeacherButton"> Подробнее </button>
        </div>

        <div className = "scoreSection">
          <p className = "scoreValue"> {teacher.obtainedScore} / {teacher.maximumScore} </p>
          <p className = "littleText"> Максимальный <br /> балл ученика </p>
          <button className = "individualTeacherButton"> Записаться </button>
        </div>
      </div>
    </div>
  )
}