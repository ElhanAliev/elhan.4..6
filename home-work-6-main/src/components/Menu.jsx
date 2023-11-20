import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div>
        <div>
          <Link to="/">
           <div>Home</div>
          </Link>
          <Link to="/contacts">
          <div>Contacts</div>
          </Link>
          <Link to="/about">
          <div>About</div>
          </Link>
            
            
        </div>
    </div>
  )
}

export default Menu