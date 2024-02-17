import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./XCode.css";

let CodeView = {
  arProject: "arProject",
  widgetKit: "widgetKit",
  reactNative: "reactNative",
  flutter: "flutter",
  fastApi: "fastApi",
};

export default function XCode({width, setProgramm, Programm}) {
  let [codeView, setCodeView] = useState(CodeView.arProject);
  let [sidebar, setSideBar] = useState(true)
  function chooseCodeView() {
    switch (codeView) {
      case CodeView.arProject:
        return <XCodeARView width={width} />;
      case CodeView.widgetKit:
        return <WidgetKit width={width} />;
      case CodeView.reactNative:
        return <ReactNative width={width} />;
      case CodeView.flutter:
        return <Flutter width={width} />;
      case CodeView.fastApi:
        return <FastAPI width={width} />;
    }
  }

  return (
    <>
      {width <= 450 ? (
        <div className="xcode">
          {sidebar ? (
            <XCodeSideBarLeft width={width} codeView={codeView} setCodeView={setCodeView} setProgramm={setProgramm} Programm={Programm} setSideBar={setSideBar} sidebar={sidebar}/>
          ) : (
            <div className="xcodeMainView">
          
              <XCodeMainViewHeader filename={codeView} setSideBar={setSideBar} sidebar={sidebar} width={width}/>

              {chooseCodeView()}
            </div>
          )}

          
        </div>
      ) : (
        <div className="xcode">
          <XCodeSideBarLeft codeView={codeView} setCodeView={setCodeView} />
          <div className="xcodeMainView">
            <XCodeMainViewHeader filename={codeView} />

            {chooseCodeView()}
          </div>
          <div className="xcodeSideView xcodeSideViewRight"> </div>
        </div>
      )}
    </>
  );
}

function XCodeARView({width}) {
  const codeString = `  import ArKit
  import SwiftUI

  struct ARView: View {
    let objectTracker: () -> Experience{"Tracks and Reacts to Images"}

    class Points {
      p1: "Deteckts images within the Envionrment"
      p2: "Places pre definde 3D Object on the Image"
    }


    func useCases () -> Ideas {
      let id1 = "Can be used to make advertisment more interactable"
      let id2 = "Addes new interactive layer to media expirences like Books or Movies" 
      let id3 = "Adds a more emersive feal to exising app"
      let id4 = "Improves Product display"
    }


    var body: some View {

      ARView(
        addTrackingPoints: Points, 
        addIdeas: new useCases()
      )
    }

    print(test)
  }
  `;

  return (
    <div className="xcodeMainEditView">
      {width <= 450 ? (
        <div className="xcodeCodeView">
          <XCodeCodeElement codeString={codeString} language="swift" />
        </div>
      ) : (
        <>
          <div className="xcodeCodeView">
            <XCodeCodeElement codeString={codeString} language="swift" />
          </div>

          <div className="xcodePreviewView ">Code Preview</div>
        </>
      )}
    </div>
  );
}

function WidgetKit() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Widget Kit View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function ReactNative() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">React Native View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function Flutter() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Flutter View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function FastAPI() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Fast API View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function XCodeMainViewHeader({ filename, sidebar, setSideBar, width }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function fileExt() {
    switch (filename) {
      case CodeView.flutter:
        return <h2 className="xcodeHeaderFileName">{capitalizeFirstLetter(filename)}.dart</h2>;

      case CodeView.reactNative:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.jsx
          </h2>
        );

      case CodeView.fastApi:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.py
          </h2>
        );

      default:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.swift
          </h2>
        );
    }
  }

  return (
    <div className="xcodeMainViewHeader">
      {width <= 450 ? (
        <button className="xcodeMainViewBackButton" onClick={()=>setSideBar(!sidebar)}>
          <img src="/images/icons/chevron-left-solid.svg" />
          <p>
            Projects
          </p>
        </button>
      ) : (
        <></>
      )}

      {fileExt()}

      {width <= 450 ? (
        <></>
      ) : (
        <div>
          <p className="eIcon">E</p>
          <p>{capitalizeFirstLetter(filename) + " >"} iPhone Simulator 15</p>
        </div>
      )}

      <img src="/images/icons/cloud-solid.svg" />
      <img src="/images/icons/plus-solid.svg" />
    </div>
  );
}

function XCodeSideBarLeft({ width, codeView, setCodeView, setProgramm, Programm,setSideBar, sidebar }) {
  let [subFolderOne, setSubFolderOne] = useState(true);
  let [subFolderTwo, setSubFolderTwo] = useState(false);
  let [subFolderThree, setSubFolderThree] = useState(false);
  let [subFolderFour, setSubFolderFour] = useState(false);

  function changeCodeView(codeView){

    setCodeView(codeView);

    setSideBar(!sidebar)
  }


  return (
    <div className="xcodeSideView">
      <div className="xcodeSideBarHeader">
        {width <= 450 ? (
          <button onClick={() => setProgramm(Programm.None)}>
            <img src="/images/icons/chevron-left-solid.svg" />
            Home
          </button>
        ) : (
          <></>
        )}
        <img src="/images/icons/play-solid.svg" />
      </div>
      <hr />
      <div className="xcodeSidebarIconRow">
        <img src="/images/icons/folder-regular.svg" />
        <img src="/images/icons/bookmark-regular.svg" />
        <img src="/images/icons/triangle-exclamation-solid.svg" />
        <img src="/images/icons/square-check-regular.svg" />
        <img src="/images/icons/magnifying-glass-solid.svg" />
      </div>
      <hr />
      <div>
        <ul className="xcodeFolderStructure">
          <li className="xcodeSubFiels">
            {/* NOTE: Ar View Folder */}
            <div
              className="codefolder"
              onClick={() => setSubFolderOne(!subFolderOne)}
            >
              <img
                src={
                  subFolderOne
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              AR View
            </div>
            {/* NOTE: Sub Fiels */}
            <ul className={subFolderOne ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => changeCodeView(CodeView.arProject)}
                className={
                  codeView == CodeView.arProject
                    ? "codefile codefileActive"
                    : "codefile"
                }
              >
                <img
                  src={
                    codeView == CodeView.arProject
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                main.swift
              </li>
              <li
                onClick={() => changeCodeView(CodeView.widgetKit)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.widgetKit
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                view.swift
              </li>
            </ul>
          </li>
          {/* NOTE: Widget Kit Folder */}
          <li className="xcodeSubFiels">
            <div
              onClick={() => setSubFolderTwo(!subFolderTwo)}
              className="codefolder"
            >
              <img
                src={
                  subFolderTwo
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              Widget Kit
            </div>
            {/* NOTE: Sub Files */}
            <ul className={subFolderTwo ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => changeCodeView(CodeView.arProject)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.arProject
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                main.swift
              </li>
              <li
                onClick={() => changeCodeView(CodeView.widgetKit)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.widgetKit
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                view.swift
              </li>
            </ul>
          </li>
          {/* NOTE: Cross Plattform */}
          <li className="xcodeSubFiels">
            <div
              onClick={() => setSubFolderThree(!subFolderThree)}
              className="codefolder"
            >
              <img
                src={
                  subFolderThree
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              Cross Plattform
            </div>
            {/* NOTE: Sub Files */}
            <ul className={subFolderThree ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => changeCodeView(CodeView.reactNative)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.reactNative
                      ? "/images/icons/react-color.svg"
                      : "/images/icons/react.svg"
                  }
                  className="codefileIcon"
                />
                react-native.jsx
              </li>
              <li
                onClick={() => changeCodeView(CodeView.flutter)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.flutter
                      ? "/images/icons/android-color.svg"
                      : "/images/icons/android.svg"
                  }
                  className="codefileIcon"
                />
                flutter-dart.dart
              </li>
            </ul>
          </li>
          {/* NOTE: Backend */}
          <li className="xcodeSubFiels">
            <div
              onClick={() => setSubFolderFour(!subFolderFour)}
              className="codefolder"
            >
              <img
                src={
                  subFolderFour
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              Back End
            </div>
            {/* NOTE: Sub Files */}
            <ul className={subFolderFour ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => changeCodeView(CodeView.fastApi)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.fastApi
                      ? "/images/icons/python-color.svg"
                      : "/images/icons/python.svg"
                  }
                  className="codefileIcon"
                />
                main.py
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function XCodeCodeElement({ codeString, language }) {
  let editorCustomStyle = {
    padding: "25px",
    fontSize: "1.5rem",
    fontFamily: "Cutive-Mono",
  };

  return (
    <div className="code">
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={editorCustomStyle}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
