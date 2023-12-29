import { useContext, useRef } from "react";
import HomeMenu from "../Components/HomeCategory";
import NavBar from "../Components/NavBar";
import { StateContext } from "../Context/Context";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Home = () => {
  const { categories } = useContext(StateContext);

  

  return (
    <div className="bg-white dark:bg-dark">
      <header
        className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] relative z-30`}
      >
        <NavBar />
        <div className=" h-[95vh] w-full  absolute top-0 left-0 z-40  bg-black opacity-70"></div>

        <div className="container mx-auto">
          <h1 className="relative md:z-50 z-40 font-header text-white ">Welcome to NTH Degree Bar</h1>
        </div>
      </header>

      <main className="container mx-auto py-20">
        <h1 className="mb-6">Menu categories</h1>
        <div className="">
          <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            loop={true}
            slidesPerView={4}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}


            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {categories?.map((category) => (
              <SwiperSlide key={category.id}>
                <HomeMenu category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-end ">
          <GrFormPrevious  size={40} className="prev text-lg cursor-pointer" />
          <GrFormNext size={40} className="next text-lg cursor-pointer" />
        </div>

      </main>
    </div>
  );
};

export default Home;
