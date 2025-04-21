import React from "react";
import AudioPlayer from "react-h5-audio-player";
import gol from "./assets/audio/gol.mp3";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";

const SvjetskoPrvenstvo = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
  <h1>Svjetsko prvenstvo</h1>
  <p style={{ fontSize: "1.25rem", lineHeight: "1.5", marginBottom: "1rem" }}>
    Svjetsko prvenstvo u nogometu je najpopularnije nogometno natjecanje koje okuplja najbolje reprezentacije iz cijelog svijeta. Održava se svake četiri godine i privlači milijune gledatelja.
    Prvo prvenstvo je održano u Urugvaju 1930. godine, a od tada je postalo simbol nogometne kulture i tradicije.
    <br />
    Hrvatska nogometna reprezentacija je ostvarila povijesni uspjeh na Svjetskom prvenstvu 2018. godine, gdje su osvojili drugo mjesto.
    <br />
    <a href="https://hr.wikipedia.org/wiki/Hrvatska_na_Svjetskom_nogometnom_prvenstvu" target="_blank">Više o Hrvatskoj u Svjetskom prvenstvu</a>
  </p>

  {/* Video Embed */}
  <div style={{ marginTop: "2rem", position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      src="https://www.youtube.com/embed/COrwIgS44k4?si=_0hbltuAxOYB0dtA"
      title="YouTube video player"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

  {/* Audio Controls */}
  <div style={{ marginTop: "2rem", textAlign: "center" }}>
  <p style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
      Gol Mario Mandžukića<br />
      FIFA World Cup Half Final 2018 Hrvatska - Engleska<br />
      </p>
      <AudioPlayer
        src={gol}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        autoPlayAfterSrcChange={false}
        customAdditionalControls={[]}
        style={{
          height: "100px",
        }}
        className="big-audio-player"
      />
    </div>
</div>

  );
};

export default SvjetskoPrvenstvo;
