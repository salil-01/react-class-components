import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import StatefulClassComponent from "./components/StatefulClassComponent";

function App() {
  return (
    <>
      <FunctionComponent />
      <ClassComponent />
      <br />
      <StatefulClassComponent name={"Salil"} />
    </>
  );
}

export default App;
