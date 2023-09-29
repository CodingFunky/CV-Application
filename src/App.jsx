import GeneralInfo from "./Components/GeneralInfo.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
// import Counter from "./Components/Counter.jsx";
import List from "./Components/List.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
      <span className="madeWith">Made with:</span>
      <List />
    </>
  );
}

export default App;
