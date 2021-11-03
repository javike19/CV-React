import './App.css';
import {useState} from "react";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import More from "./components/More/More";
import { CV } from "./CV/CV";

const {hero, experience, education, habilities} = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <button className="custom-btn btn-4"
      onClick={() => setShowEducation(true)}>Education</button>
      <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More habilities={habilities} />
    </div>
  );
}

export default App;
