import Greetings, { Info } from "./Greetings.jsx";
import Counter from "./Counter.jsx";
import List from "./List.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Greetings />
      <Info />
      <div>
        <p>Made with:</p>
        <List />
      </div>
      <Counter />
    </>
  );
}

export default App;
