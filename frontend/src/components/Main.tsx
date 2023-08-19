import Navigation from "./main/Navigation"
import MoreInfo from "./main/MoreInfo"
import "../styles/main.css"

export default function Main() {
  return (
    <div className = "mainBody">
      <Navigation />
      <MoreInfo />
    </div>
  )
}