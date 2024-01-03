import React from "react";

import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactComponent = () => {
  return (
    <div className="mx-24">
      <div className="">
        <div className="text-center">Get in touch</div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          atque illo unde distinctio mollitia.
        </p>
      </div>

      <div className="flex items-start justify-between gap-6 mt-6">
        <div className="">
          <div className="">
            <h4>Contact Info</h4>
            <p className=" w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              iste.
            </p>
          </div>
          <div className="">
            <div className="flex items-center justify-start my-2 gap-2">
              <div className="">
                <MdLocalPhone />
              </div>
              <div className="">
                <p>0987654321</p>
                <p>0987654321</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <MdEmail />
              <p>nthdegree@gmail.com</p>
            </div>
            <div className="flex items-center justify-start my-2 gap-2">
              <IoLocationOutline />
              <p>Inya Lake Hotel</p>
            </div>
          </div>
        </div>
        <form action="" className="ba basis-1/2">
          <div className="">
            <input type="text" className=" w-full block  py-2 px-4 rounded-sm focus:border-none " placeholder="Name" />
            <input type="text"  className=" w-full block my-4 py-2 px-4  rounded-sm" placeholder="Email" />
            <textarea name="" id="" className="block w-full  rounded-sm" rows={5} placeholder="Message"></textarea>
            <button className="i inline-block py-2 px-4 rounded-sm bg-blue-700 mt-4">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
