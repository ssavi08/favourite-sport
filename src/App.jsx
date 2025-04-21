import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Nogomet from "./Nogomet";
import Vaterpolo from "./Vaterpolo";
import Luka from "./Luka";
import Sandro from "./Sandro";
import Formula1 from "./Formula1";
import FootballBanner from "./FootballBanner"
import BavimJa from "./BavimJa";
import BavimJa2 from "./BavimJa2";
import SvjetskoP from "./SvjetskoP";

function App() {
  return (
    <div>
      <Header />
      <FootballBanner />
      <Nogomet />
      <br>
      </br>

      <div id="svjetsko-prvenstvo">
        <SvjetskoP />
      </div>
      <hr style={{ border: '1px solid black', margin: '100px' }} />

      <div id="bavimlise" style={{ display: "flex", textAlign: "center", justifyContent: "center", padding: "20px" }}>
      <h1><strong>Bavim li se ja nogometom?</strong></h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
          padding: "20px"
        }}
      >
        <BavimJa />
        <BavimJa2 />
      </div>
     
      
      <div id="drugi-sport" className="razmak-izmedu"><hr style={{ border: '1px solid black', margin: '100px' }} /><h1><strong>Drugi izbor</strong></h1></div>
      
      

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
          padding: "20px"
        }}
      >
        <Vaterpolo />
        <Formula1 />
      </div>
      
      <hr style={{ border: '1px solid black', margin: '100px' }} />
      <div style={{ display: "flex", gap:"100px", justifyContent: "center"}}><Luka /><Sandro /></div>
      <Footer />
    </div>
  );
}

export default App;
