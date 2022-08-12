// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Slick.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect,useState } from "react";

function Slick() {
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(()=>{
    fetch(`https://apis.data.go.kr/B551011/KorService/areaBasedList?serviceKey=%2B5juZ2oo8p9fd9pgmKEEYLuIs4KE2JabN2JIjinKYJtXaVInvxjvQlFCIR9y8HHtHEpmLhqRtM7BDNb2XsBMcw%3D%3D&numOfRows=10&pageNo=${Math.floor(Math.random()*100)}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=C`)
    .then((response)=>response.json())
    .then((json)=>
    {
      setPlace(json.response.body.items.item);
      setLoading(false);
    }
    );
    
  },[]);
  return (
    <>
    { loading ? <div className="loadingScreen">loading</div> :
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {place.map((data)=><SwiperSlide><div>{data.title}</div><img src={data.firstimage} /></SwiperSlide>)}      
      </Swiper>
}

    </>
  );
}
export default Slick;