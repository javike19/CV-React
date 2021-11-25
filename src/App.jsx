import './App.css';
import {useState} from "react";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import More from "./components/More/More";
import AboutMe from "./components/aboutMe/AboutMe";
import { CV } from "./CV/CV";
import Languages from './components/Languages/Languages';
import Other from './components/Other/Other';

const {hero, aboutMe, experience, education, habilities, languages, other} = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <div>
        <AboutMe aboutMe={aboutMe}/>
      </div>
      <button className="custom-btn btn-4"
      onClick={() => setShowEducation(true)}>Educación</button>
      <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More habilities={habilities} />
      <Languages languages={languages} />
      <Other other={other} />
    </div>
  );
}

export default App;
