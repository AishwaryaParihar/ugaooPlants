import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './Review.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Customer01 from "../../../assets/Customer01.webp";
import Customer02 from "../../../assets/Customer02.jpg";
import Customer03 from "../../../assets/Customer03.jpg";
import Customer04 from "../../../assets/Customer04.jpg";

function Review() {
  return (
    <div className="swiper-container">
      <Swiper
        className='swiper-box p-0'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={22}
        slidesPerView={3}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true, reverseDirection: false }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 }
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='swiper-slide p-0'>
          <div className="text-center">
            <img src={Customer01} alt="" className='img-fluid customer-img' />
          </div>
          <div className="text-center slide-content">
            <div className='text-center'>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
            </div>
            <div className='w-100 para-font fs-5'>
              After receiving this plant (𝑴𝒐𝒏𝒔𝒕𝒆𝒓𝒂 𝑫𝒆𝒍𝒊𝒄𝒊𝒐𝒔𝒂), the plant was mature, tall as promised with a healthy growth... it was well hydrated and full of node.. The packaging was great... Thank you @ugaoo for this delightful Monstera.. I'll be happy to buy it again
              <div className='text-center'>
                - Aishwarya Roy
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="text-center">
            <img src={Customer02} alt="" className='img-fluid customer-img' />
          </div>
          <div className="text-center slide-content">
            <div className='text-center'>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
            </div>
            <div className='w-100 para-font fs-5'>
              After receiving this plant (𝑴𝒐𝒏𝒔𝒕𝒆𝒓𝒂 𝑫𝒆𝒍𝒊𝒄𝒊𝒐𝒔𝒂), the plant was mature, tall as promised with a healthy growth... it was well hydrated and full of node.. The packaging was great... Thank you @ugaoo for this delightful Monstera.. I'll be happy to buy it again
              <div className='text-center'>
                - Aishwarya Roy
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="text-center">
            <img src={Customer03} alt="" className='img-fluid customer-img' />
          </div>
          <div className="text-center slide-content">
            <div className='text-center'>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
            </div>
            <div className='w-100 para-font fs-5'>
              After receiving this plant (𝑴𝒐𝒏𝒔𝒕𝒆𝒓𝒂 𝑫𝒆𝒍𝒊𝒄𝒊𝒐𝒔𝒂), the plant was mature, tall as promised with a healthy growth... it was well hydrated and full of node.. The packaging was great... Thank you @ugaoo for this delightful Monstera.. I'll be happy to buy it again
              <div className='text-center'>
                - Aishwarya Roy
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <div className="text-center">
            <img src={Customer04} alt="" className='img-fluid customer-img' />
          </div>
          <div className="text-center slide-content">
            <div className='text-center'>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
              <i className="fa-solid fa-star text-warning fa-xs"></i>
            </div>
            <div className='w-100 para-font fs-5'>
              After receiving this plant (𝑴𝒐𝒏𝒔𝒕𝒆𝒓𝒂 𝑫𝒆𝒍𝒊𝒄𝒊𝒐𝒔𝒂), the plant was mature, tall as promised with a healthy growth... it was well hydrated and full of node.. The packaging was great... Thank you @ugaoo for this delightful Monstera.. I'll be happy to buy it again
              <div className='text-center'>
                - Aishwarya Roy
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Review;
