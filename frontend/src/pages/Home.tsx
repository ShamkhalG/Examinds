import Main from "../components/Main"
import Courses from "../components/Courses"
import AboutUs from "../components/AboutUs"
import Teachers from "../components/Teachers"
import Registration from "../components/Registration"
import ContactUs from "../components/ContactUs"

export default function Home() {
  return (
    <div>
      <Main />
      <Courses />
      <AboutUs />
      <Teachers />
      <Registration />
      <ContactUs />
    </div>
  )
}