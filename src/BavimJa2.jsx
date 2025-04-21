import React from "react";
import "./App.css";

export default function Nogomet() {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100%', padding: '2px', boxSizing: 'border-box' }}>
      {/* LEFT: Section (40%) */}
      <section className="bavimli"
      >
        <div className="bavimli-detalji"
        style={{ flex: '0 0 50%', paddingRight: '20px' }}>
          <h3><strong>Sandro</strong></h3>
          <p>
            U osnovnoj školi, kada sam bio 6. razred, jedan me prijatelj poveo sa sobom na trening u nogometni klub našeg grada.
            Bilo je proljeće i dan je bio odličan. Dečki koji treniraju duže vrijeme su me ugodno primili i objasnili kako trening funkcionira.
            Svidjelo mi se društvo tako da sam išao na treninge redovno, no nakon godinu dana sam prestao.

            <br>
            </br>
            <br>
            </br>
            Nogomet sad igram tijekom vrućih ljetnih večeri. Kolege i ja organiziramo i rezerviramo teren i dobro se provedemo.
            Ne mislim ponovno se upisati u nogometni klub jer sada imam druge hobije a nogomet više volim gledati i komentirati sa društvom uz hladno pivo. Pogotovo Svijetsko prvenstvo u nogometu.
          </p>
        </div>
      </section>
    </div>
  );
}