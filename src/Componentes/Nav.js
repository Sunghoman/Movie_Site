import React from "react";

const Nav = () => {
  return(
    <nav>
      <div className="menuToggle">
        
        <input type="checkbox"/>

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <li>Home</li>
          <li>About</li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;