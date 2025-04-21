import React from "react";

const Header = () => (
  <header>
    <h1><strong>Naš najdraži sport</strong></h1>
    <a href="#svjetsko-prvenstvo" style={{ marginLeft: "10px", marginRight: "10px" }}>
          <button>Svjetsko Prvenstvo</button>
        </a>
    <a href="#drugi-sport" style={{ marginLeft: "10px", marginRight: "10px" }}>
      <button>Drugi sportovi</button>
    </a>
    <a href="#bavimlise" style={{marginLeft: "10px", marginRight: "10px" }}>
      <button>Nogomet i mi</button>
    </a>
    
  </header>
);

export default Header;
