import { useRef } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainSection from "./Components/Main/MainSection";

function App() {
  const mainSectionRef = useRef(null);

  return (
    <div className="bg-art">
      <Header mainSectionRef={mainSectionRef}></Header>
      <MainSection mainSectionRef={mainSectionRef}></MainSection>
    </div>
  );
}

export default App;
