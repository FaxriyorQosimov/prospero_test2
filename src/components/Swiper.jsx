
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination]);


export default function BySwiper({setGaleryCardVizible, setGalerys}) {
  
  const sarah = [
      {id: 1, img: 'https://images.pexels.com/photos/10761764/pexels-photo-10761764.png?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-1'},
      {id: 2, img: 'https://images.pexels.com/photos/10774699/pexels-photo-10774699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-2'},
      {id: 3, img: 'https://images.pexels.com/photos/10435040/pexels-photo-10435040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-3'},
      {id: 4, img: 'https://images.pexels.com/photos/9940537/pexels-photo-9940537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-4'},
      {id: 5, img: 'https://images.pexels.com/photos/10156169/pexels-photo-10156169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-5'},
      {id: 6, img: 'https://images.pexels.com/photos/10831426/pexels-photo-10831426.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-6'},
      {id: 7, img: 'https://images.pexels.com/photos/10298776/pexels-photo-10298776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-7'},
      {id: 8, img: 'https://images.pexels.com/photos/4577858/pexels-photo-4577858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-8'},
      {id: 9, img: 'https://images.pexels.com/photos/6044019/pexels-photo-6044019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-9'},
      {id: 10, img: 'https://images.pexels.com/photos/10515650/pexels-photo-10515650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-10'},
      {id: 11, img: 'https://images.pexels.com/photos/9336604/pexels-photo-9336604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-11'},
      {id: 12, img: 'https://images.pexels.com/photos/10894693/pexels-photo-10894693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500g', alt: 'nature-12'},
  ]
  const thompson = [
    {id: 1, img: 'https://images.pexels.com/photos/10234219/pexels-photo-10234219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-1'},
    {id: 2, img: 'https://images.pexels.com/photos/10057617/pexels-photo-10057617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-2'},
    {id: 3, img: 'https://images.pexels.com/photos/4577858/pexels-photo-4577858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-3'},
    {id: 4, img: 'https://images.pexels.com/photos/5721901/pexels-photo-5721901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-4'},
    {id: 5, img: 'https://images.pexels.com/photos/6303577/pexels-photo-6303577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-5'},
    {id: 6, img: 'https://images.pexels.com/photos/10059294/pexels-photo-10059294.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-6'},

]
const alexandra = [
    {id: 1, img: 'https://images.pexels.com/photos/7569860/pexels-photo-7569860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-1'},
    {id: 2, img: 'https://images.pexels.com/photos/6044019/pexels-photo-6044019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-2'},
    {id: 3, img: 'https://images.pexels.com/photos/4916706/pexels-photo-4916706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-3'},
    {id: 4, img: 'https://images.pexels.com/photos/5612374/pexels-photo-5612374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-4'},
    {id: 5, img: 'https://images.pexels.com/photos/3287165/pexels-photo-3287165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-5'},
    {id: 6, img: 'https://images.pexels.com/photos/6942742/pexels-photo-6942742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-6'},
    {id: 7, img: 'https://images.pexels.com/photos/4489339/pexels-photo-4489339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-7'},
    {id: 8, img: 'https://images.pexels.com/photos/4388220/pexels-photo-4388220.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'nature-8'},
]
  
  const onClickWatchPhotosBtn = (item) => {
    setGaleryCardVizible(true)
    setGalerys(item)
  }
  
  return (
    <>
    <Swiper height="500" style={{height: '500px', zIndex: '0'}} autoHeight={true} spaceBetween={30} effect={'fade'}  pagination={{
    "clickable": true
  }} className="mySwiper">
    <SwiperSlide style={{'background-image': 'url(https://swiperjs.com/demos/images/nature-1.jpg)', height: '100%'}}>
        <button className="job_intervyu_left_card_btn">Hot</button>
        <div className="job_intervyu_left_card_content">
            <img src="../../Magazine/image-207.jpg" alt="sf"/>
            <h4>By Sarah Jenkins</h4>
            <h6>Photographer</h6>
            <h1>Readers' Choice winners: Your wine country favorites</h1>
            <button className="btn" onClick={() => onClickWatchPhotosBtn(sarah)}>
                <img src="../../Magazine/Images.png" alt=""/>
                &nbsp; Watch photos <span>{sarah.length}</span>
            </button>
        </div>
    </SwiperSlide>
    <SwiperSlide style={{'background-image': 'url(https://swiperjs.com/demos/images/nature-2.jpg)', height: '100%'}}>
        <button  className="job_intervyu_left_card_btn">Hot</button>
        <div className="job_intervyu_left_card_content">
            <img src="../../Magazine/image-190.png" alt="sf"/>
            <h4>Olivia Thompson</h4>
            <h6>Coacher</h6>
            <h1>Live life to the fullest, and focus on the positive</h1>
            <button className="btn" onClick={() => onClickWatchPhotosBtn(thompson)}>
                <img src="../../Magazine/Images.png" alt=""/>
                &nbsp; Watch photos <span>{thompson.length}</span>
            </button>
        </div>
    </SwiperSlide>
    <SwiperSlide style={{'background-image': 'url(https://swiperjs.com/demos/images/nature-1.jpg)', height: '100%'}}>
        <button className="job_intervyu_left_card_btn">Hot</button>
        <div className="job_intervyu_left_card_content">
            <img src="../../Magazine/image-194.png" alt="sf"/>
            <h4>Alexandra Green</h4>
            <h6>Interior designer</h6>
            <h1>The details are not the details. They make the design.</h1>
            <button className="btn" onClick={() => onClickWatchPhotosBtn(alexandra)}>
                <img src="../../Magazine/Images.png" alt=""/>
                &nbsp; Watch photos <span>{alexandra.length}</span>
            </button>
        </div>
    </SwiperSlide>

  </Swiper>
    </>
  )
}