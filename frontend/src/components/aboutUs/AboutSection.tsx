interface Section {
  id: number;
  title: string;
  imagePath: string;
  text: string; 
}

export default function AboutSection({ section }: {section: Section}) {
  return (
    <div className = "sectionDiv">
      {section.id % 2 === 0 ? (
        <div className = "sectionImgDiv">
          <img
            src = {process.env.PUBLIC_URL + section.imagePath}
            alt = "Error in loading"
          />
        </div>
      ) : null}
      
      <div className = "sectionNoImgDiv">
        <div className = "sectionNumDiv">
          <p className = "sectionNum"> {section.id} </p>
        </div>  
        
        <div className = "sectionNoNumDiv">
          <p className = "sectionTitle"> {section.title} </p>
          <p className = "sectionText"> {section.text} </p>
        </div>
      </div>

      {section.id % 2 === 1 ? (
        <div className = "sectionImgDiv">
          <img
            src = {process.env.PUBLIC_URL + section.imagePath}
            alt = "Error in loading"
          />
        </div>
      ) : null}
    </div>
  )
}