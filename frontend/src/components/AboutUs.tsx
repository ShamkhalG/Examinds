import { aboutUsList } from "../assets/aboutUsData";
import AboutSection from "./aboutUs/AboutSection";
import "../styles/aboutUs.css"

export default function AboutUs() {
  return (
    <div>
      <div className = "whyUsDiv">
        <p className = "whyUsText"> ПОЧЕМУ ИМЕННО МЫ ? </p>
      </div>
      {aboutUsList.map((section, index) => (
        <AboutSection
          key = {index}
          section = {section}
        />
      ))}
    </div>
  )
}