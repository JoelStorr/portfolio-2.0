import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import MainDesktop from "./MainDesktop/MainDesktop";
import AppBar from "./AppBar/AppBar";
import "./Desktop.css";
import AppStore from "./AppStore/AppStore";
import Browser from "./Browser/Browser";
import Kontakt from "./KontaktApp/Kontakt";
import XCode from "./XCode/XCode";
import Widgets from "./Widgets/Widgets";
// NOTE: App Store
import WhenIChanged from "./AppStore/AppDetail/WhenIChanged";
import IssueTracker from "./AppStore/AppDetail/IssueTracker";
import DubDubGrub from "./AppStore/AppDetail/DubDubGrub";
import GitHubFollowers from "./AppStore/AppDetail/GitHubFollowers";

// NOTE: Browser
import LinkShare from "./Browser/Websites/LinkShare";
import Audiophile from "./Browser/Websites/Audiophile";
import ThreeDTShirtDesigner from "./Browser/Websites/3dTShirtDesigner";
import ShapeCSS from "./Browser/Websites/ShapeCSS";
import ThreeJSBall from "./Browser/Websites/ThreeJSBall";
import Portfolio from "./Browser/Websites/Portfolio";

function Desktop() {
  const [width, setWidth] = useState(window.innerWidth);

  let pathname = window.location.pathname

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

 

  console.log(window.location.pathname)

if(pathname){
  return (
    <>
      <div
        className={
          pathname === "/"
            ? "programmHolder"
            : pathname === "/about"
            ? "programmHolderSmall programmHolderActive"
            : "programmHolder programmHolderActive"
        }
      >
        <Routes>
          <Route path="/" element={<></>} />
  
          {/* NOTE: AppStore Routes */}
          <Route path="/appstore" element={<AppStore width={width} />}>
            <Route element={<WhenIChanged />} index={true} />
            <Route path="issue" element={<IssueTracker />} />
            <Route path="dubdub" element={<DubDubGrub />} />
            <Route path="gh" element={<GitHubFollowers />} />
            <Route path="sidebar" element={<></>} />
          </Route>
          {/* NOTE: Browser Routes  */}
          <Route path="/browser" element={<Browser width={width} />}>
            <Route index element={<LinkShare />} />
            <Route path="audiophile" element={<Audiophile />} />
            <Route path="shirt-designer" element={<ThreeDTShirtDesigner />} />
            <Route path="shape-css" element={<ShapeCSS />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="threejs-game" element={<ThreeJSBall />} />
          </Route>
          {/* NOTE: XCode Routes */}
          <Route path="/xcode" element={<XCode width={width} />} />
  
          <Route path="/about" element={<Kontakt width={width} />} />
        </Routes>
      </div>
  
      <div className="desktop">
        <TopBar />
        <div className="widgetHolder">
          <Widgets width={width} />
        </div>
        <MainDesktop width={width} pathname={pathname} />
        <AppBar />
        <h1 className="tagline">Frontend Developer</h1>
      </div>
    </>
  );

} else {
  return  null
}

}

export default Desktop;
