import { About } from "./about/about"
import { Certs } from "./certifications/certs"
import { Contact } from "./contact/contact"
import { Home } from "./home/home"
import { Projects } from "./projects/projects"
import { Recs } from "./recommendations/recs"
import { Skills } from "./skills/skills"


export const App = () => {

  return (
    <>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Recs />
    <Certs />
    <Contact /> 
    </>
  )
}

export default App
