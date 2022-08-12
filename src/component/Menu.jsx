import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Menu.module.css';
import axios from "axios";
function Menu() {
   
  return (
    <div>
      <div className={styles.menuBox1}>
        <ul className={styles.menu1}>
          <li><Link to="/Over/1">서울</Link></li>
          <li><Link to="/Over/2">부산</Link></li>
          <li><Link to="/Over/3">대전</Link></li>
          <li><Link to="/Over/4">강원</Link></li>
          <li><Link to="/Over/5">경상</Link></li>
          <li>전라</li>
          <li>충청</li>
          <li>제주</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
