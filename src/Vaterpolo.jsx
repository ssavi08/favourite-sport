import React, { useState } from "react";
import "./App.css";
import vaterpolo1 from "./assets/images/vaterpolo1.jpg";
import vaterpolo2 from "./assets/images/vaterpolo2.gif";

const Vaterpolo = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section id="vaterpolo-glavni" className="main-section">
      
      <div style={{textAlign: "center"}}>
        <h3>Lukin drugi izbor:</h3>
        <h1 style={{ cursor: "pointer", display: "inline-block" }} onClick={() => setInfoOpen(true)}>Vaterpolo</h1>
      </div>
      
      <div className="text-center mt-3" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        <a href={vaterpolo1} target="_blank" rel="noopener noreferrer">
          <img src={vaterpolo1} alt="Vaterpolo 1" style={{ objectFit:"cover", height:"500px", width: "300px", cursor: "pointer", borderRadius: "10px" }} />
        </a>
        <a href={vaterpolo2} target="_blank" rel="noopener noreferrer">
          <img src={vaterpolo2} alt="Vaterpolo 2" style={{ objectFit:"cover", height:"500px", width: "300px", cursor: "pointer", borderRadius: "10px" }} />
        </a>
      </div>

      {infoOpen && (
        <div className="modal-overlay" onClick={() => setInfoOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2><strong>O vaterpolu</strong></h2>
            <div className="vaterpolo-okvir" style={{ textAlign: "left", padding: "20px" }}>
              <h3>Osnovne informacije</h3>
              <ul>
                <li>Vaterpolo je vodeni sport koji se igra u bazenu između dvije ekipe.</li>
                <li>Cilj igre je postići što više golova.</li>
              </ul>
              <h3>Pravila vaterpola</h3>
              <ul>
                <li>Igra se u četiri četvrtine od po 8 minuta.</li>
                <li>7 igrača po timu: 6 + golman.</li>
                <li>Lopta mora biti iznad vode kod šuta.</li>
              </ul>
              <h3>Natjecanja</h3>
              <ul>
                <li>Svjetsko, Europsko, Olimpijske igre, LEN Liga prvaka</li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Vaterpolo;
