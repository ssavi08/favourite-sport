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
          <h3><strong>Luka</strong></h3>
          <p>
            Kao mali sam sa ekipom iz ulice svako slobodno popodne šutao loptu kao lud pun energije.
            Kada je došlo vrijeme za srednju školu, dogovoriti termin za tekmu je bilo teško no uvijek bi nešto smislili.

            I sada kada smo na faksu, uspijemo se sastati zajedno na terenu i odigrati sa srcem. 
            <br></br><br></br>Volim nogomet jer me približava sa
            prijateljima i daje mi osjećaj zajedništva. Osim toga, nogomet je odličan način za održavanje kondicije i zdravlja.
            Iako se ne bavim nogometom profesionalno, uživam u svakom trenutku provedenom na terenu. 
          </p>
        </div>
      </section>
    </div>
  );
}