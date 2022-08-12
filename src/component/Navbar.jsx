import styles from "../css/Navbar.module.css";
import React from 'react';
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import logoImg from "../imgs/logo.png";


function navbar(){
  return(
    <div>
    <header>
      <div className={styles.navbar_bg}>
   <div className={styles.navbar}>
   <Link to="/">
   <img src={logoImg} className={styles.logo} border='0' />
   </Link>
   <input className={styles.inputbar} />
   <button className={styles.buttonBar}>
    <span>🍳</span>
   </button>
  </div>
  <div  className={styles.navbar_list}>
  </div>
  </div>
  </header>
  </div>);
}

export default navbar;