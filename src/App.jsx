import GeneralInfo from "./Components/GeneralInfo.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
// import Counter from "./Components/Counter.jsx";
import "./App.css";
import data from "../data.js";

const defaultInfo = data.generalInfo;
const defaultEdu = data.education;
const defaultExp = data.experience;

function App() {
  return (
    <>
      <div className="card">
        <GeneralInfo
          name={defaultInfo.name}
          email={defaultInfo.email}
          phone={defaultInfo.phone}
        />
        <div className="appHero">
          <div className="eduContainer">
            <Education
              name={defaultEdu[0].name}
              title={defaultEdu[0].title}
              date={defaultEdu[0].date}
            />
            <Education
              name={defaultEdu[1].name}
              title={defaultEdu[1].title}
              date={defaultEdu[1].date}
            />
          </div>
          <div className="expContainer">
            <Experience
              title={defaultExp[0].title}
              responsiblities={defaultExp[0].responsibilities}
              start={defaultExp[0].start}
              end={defaultExp[0].end}
            />
            <Experience
              title={defaultExp[1].title}
              responsiblities={defaultExp[1].responsibilities}
              start={defaultExp[1].start}
              end={defaultExp[1].end}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
