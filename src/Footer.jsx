import React from "react";
import feritLogo from "./assets/images/ferit_logo.png";

const Footer = () => {
  return (
    <footer className="footer-custom mt-5">
      <div className="footer-content">
        <img src={feritLogo} alt="FERIT logo" className="footer-logo" />
        <p>
          Stranica izrađena u sklopu kolegija <strong>Multimedijska tehnika</strong> na
          <a href="https://www.ferit.unios.hr" target="_blank" rel="noopener noreferrer">
            {" "}Fakultetu Elektrotehnike Računarstva i Informacijskih Tehnologija (FERIT) Osijek
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
