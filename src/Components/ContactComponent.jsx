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

      <div className="flex items-start justify-between gap-2 mt-12">
        <div className="basis-2/5">
          <div className="">
            <h4>Contact Info</h4>
            <p className=" w-3/4">
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
        <form action="" className="flex-1">
          <iframe
          className="border-none r rounded-md h-[26rem] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.97867827189768!2d96.14906572091775!3d16.844833824715117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edccf9ed5d43%3A0x1e2fb7a01d470567!2sNth%20Degree!5e1!3m2!1smy!2smm!4v1704183094317!5m2!1smy!2smm"
           
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
