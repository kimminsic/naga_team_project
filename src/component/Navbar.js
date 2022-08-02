import { useState } from "react";
import styles from "../css/Navbar.module.css";
import React from 'react';

function navbar(){
  return(<div className={styles.navbar}>
   <img src='https://ifh.cc/g/0kqDvh.png' className={styles.logo} border='0' />
   <div>이미지</div>
   <div>ㄲ.</div>
    <div>로그인</div>
  </div>);
}

export default navbar;