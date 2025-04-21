import React, { useState } from "react";
import Luka2jpg from "./assets/images/Luka2.jpg";

const Luka = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <div className="text-center mt-5">
        <a href={Luka2jpg} target="_blank" rel="noopener noreferrer">
          <img
            id="mojaSlika"
            src={Luka2jpg}
            alt="Moja slika"
            style={{ width: "150px", height:"150px", borderRadius: "10px", cursor: "pointer" }}
          />
        </a>
        <p style={{ textAlign: "center" }}>
          <strong style={{ cursor: "pointer"}} onClick={() => setInfoOpen(true)}>Luka Bilandžić</strong>
        </p>
      </div>

      {infoOpen && (
        <div className="modal-overlay" onClick={() => setInfoOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <p><h3>O meni</h3></p>
            <ul style={{ lineHeight: "2", textAlign:"left", listStyleType: "none", padding: 0, marginTop: "10px" }}>
              <li><strong>Datum rođenja: </strong>03.12.2001.</li>
              <li><strong>Mjesto stanovanja: </strong>Vukovar</li>
              <li><strong>Hobi: </strong>trčanje, programiranje</li>
              <li><strong>Osnovna škola: </strong> <a href="https://os-blage-zadre-vu.skole.hr/o-skoli/" target="_blank" rel="noopener noreferrer">OŠ Blage Zadre</a>, Vukovar</li>
              <li><strong>Srednja škola: </strong> <a href="https://ss-tehnicka-ntesla-vu.skole.hr/povijest-nase-skole/" target="_blank" rel="noopener noreferrer">Tehnička škola Nikole Tesle</a>, Vukovar</li>
              <li><strong>Fakultet: </strong> <a href="https://www.ferit.unios.hr/" target="_blank" rel="noopener noreferrer">FERIT</a>, Osijek</li>
              <li><strong>Smjer: </strong>Stručni studij računarstvo</li>
              <li><strong>Email: </strong>lbilandzic@etfos.hr</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Luka;

