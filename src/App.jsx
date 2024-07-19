import { useEffect, useState } from "react";

import Desktop from "./Pages/Desktop/Desktop";

import "./App.css";
import ThreeDScene from "./3D/ThreeDScene";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [displayState, setDisplayState] = useState("WorkDesk");
  window.addEventListener("click", () => setDisplayState(window.clickedObject));

  useEffect(() => {
    // console.log(window.clickedObject)
  }, [displayState]);

  // function onClickHandler(){
  //   document.getElementById("base-ui").style.display = "none"
  //   document.getElementById("root").style.display = "none"
  //   document.getElementById("canvas").focus();
  // }

  return (
    <div className="app">
      {/* <button className="mainCloseBtn" onClick={onClickHandler}>X</button> */}
      {/* {displayState == "WorkDesk" ? <Desktop /> : <Console />} */}
      <ThreeDScene />
      {/* <Desktop /> */}
    </div>
  );
}

export default App;
