import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

function Header() {
   return (
   <nav className="menu" >
      <ul className="menu__items">
         <li className="menu__item">
            <Link to="/">Home</Link>
         </li>
         <li className="menu__item">
            <Link to="/about">About</Link>
         </li>
         <li className="menu__item">
            <Link to="/contact">Contact</Link>
         </li>
         {/* <li>
            <Link to="/topics">Topics</Link>
         </li> */}
     </ul>
   </nav>
    
   );
 }

 export default Header;