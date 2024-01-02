import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import aboutbg from "/image/aboutbg.jpg";
import nthabout from "/image/nthintro.jpg"
import { PiFacebookLogoFill, PiInstagramLogoBold, PiPhoneCallBold } from "react-icons/pi";

const About = () => {

  const [showMore,setShowMore] = useState(false)

  return (
    <div>
        <main className=''>
          <div className={` bg-aboutbg bg-cover mt-[-5rem]`}>
            {/* <img src={aboutbg} alt="" className=" absolute  " /> */}
            <div className='bg-dark dark:text-white relative top-[250px] md:top-[350px] xl:top-[450px] text-center z-10 h-[70vh]'>
             
              <h1 className=' text-[3rem] font-semibold relative top-[-45px] italic'>ABOUT</h1>
                    {/* <----Group of social icons---> */}
                    <div className='grid grid-rows-3 gap-1 absolute top-[-35px] w-5 z-20 left-[93%] md:left-[95%]'>
                      <div className='p-2 bg-white rounded-md'>
                        <a href="https://www.facebook.com/profile.php?id=100095044099623&mibextid=zLoPMf" target='_black'>
                        <PiFacebookLogoFill className='text-xl text-black' />
                        </a>
                      </div>
                      <div className='p-2 bg-white rounded-md'>
                        <a href="https://www.instagram.com/nth.degree.whisky.wine?igsh=ZWRucWQ4MXU2NHcx" target='_black'>
                        <PiInstagramLogoBold className='text-xl text-black' />
                        </a>
                      </div>
                      <div className='p-2 bg-white rounded-md'>
                        <a href="tel:+959455811927">
                        <PiPhoneCallBold className='text-xl text-black' />
                        </a>
                      </div>
                    </div>
                {/* <-----our story-----> */}
              <div className='grid grid-cols-1 md:grid-cols-2 my-6 gap-10 container m-auto'>
                <div className='text-start'>
                  <h1 className=' text-start d-flex italic'>Behind the Scene</h1>
                  <h2 className='text-[30px] font-bold mb-5'>Our Story</h2>
              
                  {
                    showMore ? (
                      <p>
                          “Escape the hustle and bustle of the city and indulge in a glass of wine or whisky in a natural paradise.
                    Nth Degree restaurant, nestled by the stunning Inya Lake in Yangon, Myanmar , offers a wide range of beverages including wines, whisky, cocktails, and beer, as well as delicious food at reasonable prices .
                    But Nth Degree is more than just a restaurant. It’s a cozy and unique spot where you can unwind with nature and create unforgettable memories . So why not visit us today and experience it for yourself?"
                      </p>
                    ): (
                      <p>
                           “Escape the hustle and bustle of the city and indulge in a glass of wine or whisky in a natural paradise.
                          Nth Degree restaurant, nestled by the stunning Inya Lake in Yangon, Myanmar, offers a wide range of ..........
                      </p>
                    )
                  }
                  <button className='mt-4 border border-blue px-3 rounded' onClick={()=>setShowMore(!showMore)}>
                    {showMore? "See Less" : "See More"}
                  </button>
                </div>
                <img src={nthabout} alt="" className='w-[85vh] rounded-md ' />
              </div>
         
            </div>
            
          </div>
        </main>
        
    </div>
  )
}

export default About