import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image from '../assets/Image/Intel-14-Gen-processor-Lunching-Social-Media-Web-Slider_1697524821.webp'
import image1 from '../assets/Image/bkash-durga-puja-home-banner-982x500.webp'
import image2 from '../assets/Image/express-delivery-girl-receiving-parcel-home-banner-982x500.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const SwiperSlider = () => {
    return (
        <div className='w-full'>
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
          <SwiperSlide><img className='w-full' src={image} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full' src={image1} alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full' src={image2} alt="" /></SwiperSlide>
        </Swiper>
    </div>
    );
};

export default SwiperSlider;