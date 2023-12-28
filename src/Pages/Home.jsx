import { useContext } from "react";
import HomeMenu from "../Components/HomeCategory";
import NavBar from "../Components/NavBar";
import { StateContext } from "../Context/Context";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const { categories } = useContext(StateContext);

  return (
    <div className="">
      <header
        className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] relative z-30`}
      >
        <NavBar />
        <div className=" h-[95vh] w-full  absolute top-0 left-0 z-40  bg-black opacity-70"></div>

        <div className="container mx-auto">
          <h1 className="relative z-50">Welcome to NTH Degree Bar</h1>
        </div>
      </header>

      

      <main className="container mx-auto py-20">
        <h1 className="mb-6">Menu categories</h1>
        <div className="">

        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categories?.map((category) => (
            
        <SwiperSlide key={category.id}>
          <HomeMenu  category={category} />
        </SwiperSlide>
          ))}
        
      </Swiper>


          
        </div>
      </main>
    </div>
  );
};

export default Home;
