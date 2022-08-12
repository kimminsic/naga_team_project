import Navbar from "../component/Navbar";
import Styles from "../css/App.module.css";
import navStyles from "../css/Navbar.module.css";
import comStyles from "../css/component.module.css";
import LocationList from "../component/LocationList";
import $, { nodeName } from "jquery";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import logoImg from "../imgs/logo.png";
import Slick from "../component/Slick";
import Menu from "../component/Menu";
import ImageList from "../component/ImageList";

function Over() {
  $(document).ready(function () {
    var Navbar = $("#SubNavbar");
    Navbar.css({
    })
    var navOffset =   $('#Navbar').offset();
    var subNavOffset = $("#SubNavbar").offset();
    $("#windows").scroll(function () {
      if ($('#windows').scrollTop() >= 169) {
        Navbar.css({
          position: "fixed",
          top:0,
          width: "100%",
        });
        Navbar.css('zIndex', '10');
      }
      else{
        Navbar.css({
        position:"",
      });
      Navbar.css('zIndex', '1');
      }
    });
  });
  return (
    <>
    <div id="windows" className={Styles.overSB} >
        <header>
      <div id="Navbar">
      <Navbar />
      </div>
        </header>
        <div id="SubNavbar">
        <Menu />
        </div> 
        <main>
        <div className={comStyles.container}>
        <Slick />
        <div className={comStyles.lcList}>
       
        </div>
</div>
<ImageList />
</main>
<footer>
  </footer>       
      </div>
    </>
  );
}

export default Over;