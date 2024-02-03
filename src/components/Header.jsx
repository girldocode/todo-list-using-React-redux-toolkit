import React from "react";
import logoImg from "../assets/—Pngtree—pink note paper stuck by_5554097 (1).png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="logo-img" src={logoImg} alt="logo-image" />
        <h1>My Todo List</h1>
      </header>
    </div>
  );
};

export default Header;
