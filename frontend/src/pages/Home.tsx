import Main from "../components/Main"
import Courses from "../components/Courses"
import AboutUs from "../components/AboutUs"
import Teachers from "../components/Teachers"
import Registration from "../components/Registration"
import ContactUs from "../components/ContactUs"
import "../styles/home.css"

export default function Home() {
  window.document.title = "Examinds" // FIXME: Change the name to the right one
  return (
    <div className = "home">
      <Main />
      <Courses />
      <AboutUs />
      <Teachers />
      <Registration />
      <ContactUs />
    </div>
  )
}