import GeneralInfo from "./GeneralInfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
// import Counter from "./Counter.jsx";
import List from "./List.jsx";
import "./App.css";

function App() {
  return (
    <div className="card">
      <GeneralInfo />
      <Education />
      <Experience />
      <div>
        <p>Made with:</p>
        <List />
      </div>
    </div>
  );
}

export default App;
