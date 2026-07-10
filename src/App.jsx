import "./styles/index.css"
import Hero from "./Hero.jsx"
import MissionVisionValues from "./MissionVisionValues.jsx"
import Events from "./Events.jsx"
import Founders from "./Founders.jsx"
import ContactUs from "./ContactUs.jsx"
import Copyright from "./Copyright.jsx"

function App() {
  return (
    <div className="app-container">
      <Hero/>
      <MissionVisionValues/>
      <Events/>
      <Founders/>
      <ContactUs/>
      <Copyright/>
    </div>
  )
}

export default App