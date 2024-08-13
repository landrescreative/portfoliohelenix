"use client";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { Rain } from "react-rainfall";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="py-56 relative overflow-hidden w-screen h-screen text-white">
      <Image
        alt="Background"
        src="/2.jpg"
        width={1000}
        height={1000}
        className="-z-10 absolute top-0	left-0 w-screen h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-100 -z-10">
        <Rain />
      </div>

      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex gap-5 justify-center items-center ">
          <IoSparklesSharp size={24} className="opacity-80 rotate-90" />
          <h1 className="text-4xl font-bold text-center"> Hola, soy Elena.</h1>
          <IoSparklesSharp size={24} className="opacity-80 rotate-40" />
        </div>

        <h3 className="text-lg">Artista & Diseñadora</h3>
        <div className="flex items-center space-x-4 mt-2">
          <a
            href="https://www.instagram.com/helenix00/"
            className="hover:transform hover:scale-125  "
          >
            <AiFillInstagram
              size={32}
              className="hover:text-pink-500 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.youtube.com/@Helen0fArt"
            className="hover:transform hover:scale-125  "
          >
            <FaYoutube
              size={32}
              className="hover:text-red-500 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.tiktok.com/@helenofart/"
            className="hover:transform hover:scale-125  "
          >
            <FaTiktok
              size={32}
              className="hover:text-black transition-all duration-200"
            />
          </a>
        </div>
        <div className="flex flex-row gap-5">
          <a
            href="#galleryContainer"
            className="bg-white text-black px-4 py-2 mt-4 hover:scale-110 transition-all duration-200 "
          >
            VER GALERIA
          </a>
          <Link
            href="/contact"
            className="bg-teal-100 text-black px-4 py-2 mt-4 hover:scale-110 transition-all duration-200 "
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
