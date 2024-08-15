import React from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="  md:w-1/2 py-12 px-10 md:px-4 flex gap-10 flex-col  items-center justify-center">
      <h1 className="text-3xl text-center">
        {" "}
        Para contactarme puedes usar mis redes sociales, o envíarme un correo
        electrónico.{" "}
      </h1>
      <h2 className="bg-gray-900 text-white px-10 py-5 rounded-full text-XL hover:scale-125 transition-all duration-300 ">
        helenix.art.00@gmail.com
      </h2>
    </div>
  );
};

export default Contact;
