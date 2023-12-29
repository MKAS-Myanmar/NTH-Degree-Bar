import { useContext, useRef } from "react";
import HomeCategory from "../Components/HomeCategory";
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
  const { categories, currentCategory, setCurrentCategory } =
    useContext(StateContext);

  const filtredCategory = categories.filter(
    (category) =>
      (category.parentCategory ? category.parentCategory : category.name) ==
      currentCategory
  );

  const hasParentCategory = categories.filter(
    (category) => category.parentCategory
  );

  function filterParentByUniqueKey(arr, key) {
    const seenKeys = {};
    return arr.filter((obj) => {
      const keyValue = obj[key];
      if (!seenKeys[keyValue]) {
        seenKeys[keyValue] = true;
        return true;
      }
      return false;
    });
  }
  const amountOfParentCat = filterParentByUniqueKey(
    hasParentCategory,
    "parentCategory"
  );

  const slidesPerViewAmount =
    currentCategory == "all"
      ? 4
      : filtredCategory.length >= 4
      ? 4
      : filtredCategory.length;


  return (
    <div className="bg-white dark:bg-dark text-white dark:text-dark">
      <header
        className={` bg-home1 bg-cover bg-center bg-no-repeat h-[95vh] relative z-30`}
      >
        <NavBar />
        <div className=" h-[95vh] w-full  absolute top-0 left-0 z-40  bg-black opacity-70"></div>

        <div className="container mx-auto  dark:text-white text-dark">
          <h1 className="relative md:z-50 z-40 font-header dark:text-white text-dark">
            Welcome to NTH Degree Bar
          </h1>
          <p className=" dark:text-white text-dark z-40 relative">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus provident, accusantium vel nulla veritatis, dolor omnis ad quis modi nihil quaerat praesentium ullam eligendi porro, voluptatum possimus sed nemo est.
          </p>
          <div className="">
            <button>About</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-20  text-dark dark:text-white">
      
        <div className="flex items-center justify-start gap-10 mb-6">
          <h1 className=" text-dark dark:text-white">Menu categories</h1>

          <div className="">
            <label className=" text-dark dark:text-white" htmlFor="category">
              Choose category:
            </label>

            <select
              onChange={(e) => setCurrentCategory(e.target.value)}
              className="w-40 h-6 relative"
              name="category"
              id="category"
            >
              <option value={"all"}>All</option>

              {amountOfParentCat?.map((category) => (
                <option
                  className="capitalize"
                  value={category?.parentCategory}
                  key={category?.id}
                >
                  {category?.parentCategory.charAt(0).toUpperCase() +
                    category?.parentCategory.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <Swiper
          className="flex !justify-start"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            loop={true}
            slidesPerView={slidesPerViewAmount}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {currentCategory == "all" ? (
              categories?.map((category) => (
                <SwiperSlide  key={category.id}>
                  <HomeCategory category={category} />
                </SwiperSlide>
              ))
            ) : filtredCategory.length > 0 ? (
              filtredCategory?.map((category) => (
                <SwiperSlide key={category.id}>
                  <HomeCategory category={category} />
                </SwiperSlide>
              ))
            ) : (
              <div className="">
                <h1>Currently, there is no menu for this category</h1>
              </div>
            )}
          </Swiper>
        </div>
        <div className="flex items-center justify-end gap-4">
          <GrFormPrevious size={40} className="prev text-lg cursor-pointer text-dark dark:text-white" />
          <GrFormNext size={40} className="next text-lg cursor-pointer text-dark dark:text-white" />
        </div>
        
      </main>
    </div>
  );
};

export default Home;
