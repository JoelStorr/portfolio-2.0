import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./AppDetail.css";

export default function GitHubFollowers() {
  const slides = [
    {
      url: "images/GHFollowers/GHSearch.jpg",
      title: "SunFlower",
    },
    {
      url: "images/GHFollowers/GHProfile.jpg",
      title: "Mountanse",
    },
  ];

  return (
    <>
      <div className="appDetailHeader">
        <div className="appDetailAppIcon">GH</div>
        <div>
          <h1>GitHubFollowers</h1>
          <h3>GitHub Api Project(Sean Allen Tutorial)</h3>
          {/* TODO: Make sure linke goes to repo */}
          <a
            className="downloadBtn"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="appDetailDevider"></div>

      <div className="appDetailUsedTech">
        <h3>Used Tech</h3>
        <div className="appDetailUsedTechList">
          <p>Swift UI</p>
          <hr />
          <p>GitHub API</p>
          <hr />
        </div>
      </div>

      <div className="sliderContainer">
        <ImageCarousel slides={slides} file={false} fullHeightImage={false} />
      </div>
      <div className="appDetailDevider"></div>
      <div className="appDetailProjectDetail">
        {/* TODO: Dispaly Descriptions */}
        <h3>About the Project</h3>
        <p>
          GitHub Follower Tracker war eines der ersten Tutorialprojekte in der
          IOS Entwicklung. Die App ist Teil des GitHub Followers Kurses von Sean
          Allen. Dieser Kurs hat mir als Einführung in die Swift Programmierung
          gedient und die Entwicklungsumgebung näher gebracht. Als Teil des
          Kurses habe ich mich mit UI Kit auseinandergesetzt und mit dem Laden
          von API Daten in einer IOS App vertraut gemacht. Ebenfalls habe ich
          das Navigieren über mehrere Seiten erlernt als auch das dynamische
          Laden von Bildern aus dem Web. Die App verwendet ein System zum
          automatischen Nachladen von Nutzerprofilen, wenn man am Ende der
          geladenen Follower angekommen ist.
        </p>
      </div>
    </>
  );
}
