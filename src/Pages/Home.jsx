import { useContext, useRef } from "react";
import HomeMenu from "../Components/HomeCategory";
import NavBar from "../Components/NavBar";
import { StateContext } from "../Context/Context";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Home = () => {
  const { categories,currentCategory, setCurrentCategory } = useContext(StateContext);

  console.log(currentCategory)

 const filtredCategory = categories.filter(category => category?.name == currentCategory)

 console.log(filtredCategory)


  return (
    <div className="bg-white dark:bg-dark text-white dark:text-dark">
      <header
        className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] relative z-30`}
      >
        <NavBar />
        <div className=" h-[95vh] w-full  absolute top-0 left-0 z-40  bg-black opacity-70"></div>

        <div className="container mx-auto">
          <h1 className="relative md:z-50 z-40 font-header text-white ">
            Welcome to NTH Degree Bar
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-20  text-white dark:text-dark">
        <div className="flex items-center justify-start gap-10 mb-6">
          <h1 className=" text-dark dark:text-white">Menu categories</h1>

          <div className="">

          
            <label className=" text-dark dark:text-white" htmlFor="category">Choose category:</label>

            <select onChange={(e) => setCurrentCategory(e.target.value)} className="w-40 h-6 relative" name="category" id="category">
            <option value={'all'}  >All</option>

             {
              categories?.map(category => (
                <option className="capitalize" value={category?.name} key={category?.id}>{category?.name.charAt(0).toUpperCase() + category?.name.slice(1)}</option>
              ))
             }
            </select>
            </div>
        </div>
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
            {
              currentCategory== 'all' ? (

                categories?.map((category) => (
                  <SwiperSlide key={category.id}>
                    <HomeMenu category={category} />
                  </SwiperSlide>
                ))

              ): (
                filtredCategory.length >0? (filtredCategory?.map((category) => (
                  <SwiperSlide key={category.id}>
                    <HomeMenu category={category} />
                  </SwiperSlide>
                ))): (
                  <div className="">
                    <h1>Currently, there is no menu for this category</h1>
                  </div>
                )

                
              )
            }
          </Swiper>
        </div>
        <div className="flex items-center justify-end ">
          <GrFormPrevious size={40} className="prev text-lg cursor-pointer" />
          <GrFormNext size={40} className="next text-lg cursor-pointer" />
        </div>
      </main>
    </div>
  );
};

export default Home;
