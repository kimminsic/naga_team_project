import mainImg from "./imgs/mainImg.jpg";
import styles from "./css/App.module.css";
import { Link } from 'react-router-dom';
const Main = (props) => {
  return (
  <div className={styles.block}>
   <img className={styles.backImg} src={mainImg} alt="설명!!!!!!!!!"></img>
   <div className={styles.text}>
   <Link to = "/Tour" className={styles.textTour}>국내</Link>
   <Link to="/Over" className={styles.textOver}>해외</Link>
   </div>
   <div className={styles.textRight}>Copyright 2022. naga All rights reserved. </div>
   </div>
   );
}
export default Main;