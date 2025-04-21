import React from "react";
import img1 from './assets/images/hrv.jpeg';
import img2 from './assets/images/hrv2.jpg';
import img3 from './assets/images/barca.png';
import img4 from './assets/images/kids.jpg';

const imgStyle = {
  width: '95%',
  height: '90%',
  objectFit: 'cover',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer'
};

export default function Nogomet() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100%', padding: '20px', boxSizing: 'border-box' }}>
      {/* LEFT: Section (40%) */}
      <section
        className="nogomet-glavni"
        style={{ flex: '0 0 40%', paddingRight: '20px' }}
      >
        <h2><strong>Nogomet</strong></h2>
        <p><strong>Nogomet je više od sporta – to je strast, zajedništvo i globalna povezanost među ljudima svih uzrasta.</strong></p>

        <div className="nogomet-detalji">
          <h3><strong>Više o nogometu</strong></h3>
          <ul>
            <li>⚽ <strong>Osnovna informacija</strong>
              <ul>
                <li>Nogomet je timska igra između dvije ekipe po 11 igrača.</li>
                <li>Igra se loptom, a cilj je postići više golova od protivnika.</li>
                <li>Postoje ligaški i kup sustavi.</li>
                <li>Ligaški sustav je jedna skupina od nekoliko momčadi, koje igraju međusobno</li>
                <li>Kup sustav je nokaut faza, gdje klubovi ig...</li>
              </ul>
            </li>
            <li>📜 <strong>Pravila nogometa</strong>
              <ul>
                <li>Dvije ekipe po 11 igrača, uključujući golmana.</li>
                <li>Ne smije se igrati rukom osim golmanu u svom prostoru.</li>
                <li>Igra traje 2 × 45 minuta s odmorom između.</li>
                <li>Postoje pravila poput zaleđa, žutih i crvenih kartona.</li>
              </ul>
            </li>
            <li>🏆 <strong>Natjecanja</strong>
              <ul>
                <li>FIFA Svjetsko prvenstvo, UEFA Europsko prvenstvo, Copa America...</li>
                <li>UEFA Liga prvaka, UEFA Europska liga, Copa Libertadores...</li>
                <li>Nacionalne lige: Premier League, La Liga, Serie A, Bundesliga...</li>
              </ul>
            </li>
            <li>🌟 <strong>Najpoznatiji igrači</strong>
              <ul>
                <li>Strani: Messi, Ronaldo, Mbappe, Haaland...</li>
                <li>Domaći: Modrić, Pašalić, Gvardiol, Livaković...</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="text-center mt-3">
          <br></br>
          <button
            className="btn btn-warning"
            onClick={() => window.open("https://www.fifa.com/", "_blank")}
            style={{ cursor: "pointer", fontSize: '20px', padding: '10px'  }}
          >
            Službena FIFA stranica
          </button>
          <button
            
            className="btn btn-warning"
            onClick={() => window.open("https://en.wikipedia.org/wiki/Laws_of_the_Game_(association_football)", "_blank")}
            style={{ cursor: "pointer", marginLeft: '15px', fontSize: '20px', padding: '10px' }}
          >
            Lista pravila igre
          </button>
        </div>
      </section>

      {/* RIGHT: 2x2 Image Grid (60%) */}
      <div
        style={{
          flex: '0 0 60%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '1px'
        }}
      >

         <a href={img1} target="_blank" rel="noopener noreferrer">
         <img src={img1} alt="img1" style={imgStyle} /></a>
        
         <a href={img2} target="_blank" rel="noopener noreferrer">
         <img src={img2} alt="img2" style={imgStyle} /></a>

         <a href={img3} target="_blank" rel="noopener noreferrer">
         <img src={img3} alt="img3" style={imgStyle} /></a>

         <a href={img4} target="_blank" rel="noopener noreferrer">
         <img src={img4} alt="img4" style={imgStyle} /></a>

      </div>
    </div>
  );
}