import touristImg from "./imgs/tourist.jpg";
import overseaImg from "./imgs/overseas.jpg";
import styles from "./App.module.css";
function App() {
  return (
   <div>
    <a className={styles.block}>
    <img src={touristImg} className={styles.backImg}></img>
    </a>
   </div>
  );
}

export default App;
