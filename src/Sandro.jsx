import React, { useState } from "react";
import Sandro1 from "./assets/images/Sandro1.jpg";

const Sandro = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <div className="text-center mt-5">
        <a href={Sandro1} target="_blank" rel="noopener noreferrer">
          <img
            id="mojaSlika"
            src={Sandro1}
            alt="Sandro slika"
            style={{ objectFit: 'cover', width: "150px", height:"150px", borderRadius: "10px", cursor: "pointer" }}
          />
        </a>
        <p style={{ textAlign: "center" }}>
          <strong style={{cursor: "pointer"}} onClick={() => setInfoOpen(true)}>Sandro Savi</strong>
        </p>
      </div>

      {infoOpen && (
        <div className="modal-overlay" onClick={() => setInfoOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p><h3>O meni</h3></p>
            <ul style={{ lineHeight: "2",textAlign:"left", listStyleType: "none", padding: 0, marginTop: "10px" }}>
              <li><strong>Datum rođenja: </strong>21.08.2002.</li>
              <li><strong>Mjesto stanovanja: </strong>Nova Gradiška</li>
              <li><strong>Hobi: </strong>teretana, igrice</li>
              <li><strong>Osnovna škola: </strong> <a href="https://os-mlovrak-ng.skole.hr/" target="_blank" rel="noopener noreferrer">OŠ Mato Lovrak</a>, Nova Gradiška</li>
              <li><strong>Srednja škola: </strong> <a href="https://ss-elektrotehnickaiekonomska-ngradiska.skole.hr/" target="_blank" rel="noopener noreferrer">Elektrotehnička i ekonomska škola Nova Gradiška</a></li>
              <li><strong>Fakultet: </strong> <a href="https://www.ferit.unios.hr/" target="_blank" rel="noopener noreferrer">FERIT</a>, Osijek</li>
              <li><strong>Smjer: </strong>Stručni studij računarstvo</li>
              <li><strong>Email: </strong>ssavi@etfos.hr</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sandro;

