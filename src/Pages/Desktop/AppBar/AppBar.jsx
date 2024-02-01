import "./AppBar.css";

export default function AppBar({ changeProgramm, programmEnum }) {
  return (
    <div className="appBar">
      <div
        className="appBarSpacer"
        onClick={() => changeProgramm(programmEnum.None)}
      >
        <p> </p>
      </div>
      <div className="appContainer">
        <ul>
          <li onClick={() => changeProgramm(programmEnum.AppStore)}>
            <div className="appIconMoc">
              <img src="/images/icons/compass-drafting-solid.svg" />
            </div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Browser)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.XCode)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Writing)}>
            <div className="appIconMoc"></div>
          </li>
          <li onClick={() => changeProgramm(programmEnum.Kontakt)}>
            <div className="appIconMoc"></div>
          </li>
        </ul>
      </div>
      <div
        className="appBarSpacer"
        onClick={() => changeProgramm(programmEnum.None)}
      >
        <p> </p>
      </div>
    </div>
  );
}
