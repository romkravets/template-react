import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import './Header.scss';

export default props => {
   return (
   <Menu {...props} className="menu" right disableAutoFocus noOverlay >
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
   </Menu>
   );
 }

