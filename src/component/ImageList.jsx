import { useEffect,useState } from "react";
import Styles from "../css/ImageList.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImageList(){
  const[loding,setLoding] = useState([]);
  const[restaurant,setRestaurant] = useState([]);
  const[attraction,setAttraction] = useState([]);
  
  useEffect(()=>{
    fetch(`https://apis.data.go.kr/B551011/KorService/searchStay?serviceKey=%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D&numOfRows=10&pageNo=${Math.floor(Math.random()*100)}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C`)
    .then((response)=>response.json())
    .then((json)=>
    {
      setLoding(json.response.body.items.item)
      console.log(json.response.body.items.item);
    }
    )
  },[]);
  const settings = {
    button: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return(
  <>
  <div className={Styles.container}>
    <div className={Styles.titleBox}>추천 숙소 리스트
    
        </div>
        <div className={Styles.image_list}>
        <Slider {...settings}>
      {loding.map((data)=>
        <img className={Styles.image_list} src={data.firstimage} />
            
        )
        }
         </Slider> 
       
         
        </div>
  </div>
  <div className={Styles.container}>
    <div className={Styles.titleBox}>추천 맛집 리스트</div>
  </div>
  <div className={Styles.container}>
    <div className={Styles.titleBox}>추천 명소 리스트</div>
  </div>
  </>
  );
}

export default ImageList;
