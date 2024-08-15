"use client";
import LightGallery from "lightgallery/react";
import Image from "next/image";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="p-10" id="galleryContainer">
      <LightGallery
        animateThumb={true}
        controls={false}
        download={false}
        mousewheel={true}
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <a href="/images/art (1).jpg">
          <Image
            width={1000}
            height={1000}
            alt="Pulpo Morado - GOUACHE SOBRE HOT PRESS PAPER - 17.3CM X 16.2CM"
            src="/images/art (1).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (2).jpg">
          <Image
            width={1000}
            height={1000}
            alt="OJO DE PULPO - GOUACHE SOBRE HOT PRESS PAPER - 6.6 X 6.5CM"
            src="/images/art (2).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (3).jpg">
          <Image
            width={1000}
            height={1000}
            alt="GASOLINERA - ACRÍLICO SOBRE LIENZO - 25.5 X 20.2 CM"
            src="/images/art (3).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (4).jpg">
          <Image
            width={1000}
            height={1000}
            alt="Retrato - ACRÍLICO SOBRE GESSO BOARD - 18CM X 13CM"
            src="/images/art (4).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (7).jpg">
          <Image
            width={1000}
            height={1000}
            alt="PIEDRA PINTURA "
            src="/images/art (7).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (6).jpg">
          <Image
            width={1000}
            height={1000}
            alt="CIUDAD PINTURA"
            src="/images/art (6).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (5).jpg">
          <Image
            width={1000}
            height={1000}
            alt="LE PETIT HONGO ESCULTURA"
            src="/images/art (5).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (8).jpg">
          <Image
            width={1000}
            height={1000}
            alt="PRUEBA DE COLOR - PINTURA"
            src="/images/art (8).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (9).jpg">
          <Image
            width={1000}
            height={1000}
            alt="MEDUSA - PINTURA"
            src="/images/art (9).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (10).jpg">
          <Image
            width={1000}
            height={1000}
            alt="RETRATO - PINTURA"
            src="/images/art (10).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>

        <a href="/images/art (11).jpg">
          <Image
            width={1000}
            height={1000}
            alt="PAISAJE - PINTURA"
            src="/images/art (11).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (2).png">
          <Image
            width={1000}
            height={1000}
            alt="OPAL - DIGITAL ART - 2266PX X 1488PX"
            src="/images/art (2).png"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (12).jpg">
          <Image
            width={1000}
            height={1000}
            alt="Turbo - DIGITAL ART - 2266PX X 1488PX"
            src="/images/art (12).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (13).jpg">
          <Image
            width={1000}
            height={1000}
            alt=" Pintura Milo "
            src="/images/art (13).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (14).jpg">
          <Image
            width={1000}
            height={1000}
            alt="Milaneso Dibujo"
            src="/images/art (14).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
        <a href="/images/art (15).jpg">
          <Image
            width={1000}
            height={1000}
            alt="Milo Dibujo - Digital Art"
            src="/images/art (15).jpg"
            className="w-full h-full object-cover rounded-lg  transition-all duration-300 hover:shadow-2xl border-4 border-gray-300 border-opacity-0 hover:border-opacity-100 hover:-translate-y-10"
          />
        </a>
      </LightGallery>
    </div>
  );
}
