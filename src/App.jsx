/* eslint-disable no-unused-vars */
import GeneralInfo from "./components/generalInfo.jsx";
import { useState } from "react";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
// import Counter from "./Components/Counter.jsx";
import "./App.css";
import data from "../data.js";

function App() {
  const [info, setInfo] = useState(data.generalInfo);
  const [edu, setEdu] = useState(data.education);
  const [exp, setExp] = useState(data.experience);

  function clearForm() {
    setInfo({});
    setEdu([]);
    setExp([]);
  }
  return (
    <>
      <div className="card">
        <GeneralInfo
          name={info.name ? info.name : ""}
          email={info.email ? info.email : ""}
          phone={info.phone ? info.phone : ""}
        />
        <div className="appHero">
          <h1>Education</h1>
          <div className="eduContainer">
            <Education
              name={edu[0].name ? edu[0].name : ""}
              title={[0][0].title ? edu[0].title : ""}
              date={edu[0].date ? edu[0].date : ""}
            />
            <Education
              name={edu[1].name ? edu[1].name : ""}
              title={edu[1].title ? edu[1].title : ""}
              date={edu[1].date ? edu[1].date : ""}
            />
          </div>
          <h1>Work History</h1>
          <div className="expContainer">
            <Experience
              title={exp[0].title ? exp[0].title : ""}
              responsiblities={
                exp[0].responsibilities ? exp[0].responsibilities : ""
              }
              start={exp[0].start ? exp[0].start : ""}
              end={exp[0].end ? exp[0].end : ""}
            />
            <Experience
              title={exp[1].title ? exp[1].title : ""}
              responsiblities={
                exp[1].responsibilities ? exp[1].responsibilities : ""
              }
              start={exp[1].start ? exp[1].start : ""}
              end={exp[1].end ? exp[1].end : ""}
            />
          </div>
        </div>
      </div>
      <button className="btn clearBtn" onClick={clearForm}>
        Clear All
      </button>
    </>
  );
}

export default App;
