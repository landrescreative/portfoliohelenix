"use client";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="p-10" id="galleryContainer">
      <LightGallery
        animateThumb={true}
        controls={false}
        download={false}
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        <a href="/art/art (1).jpg">
          <img
            alt="Pulpo Morado - GOUACHE SOBRE HOT PRESS PAPER - 17.3CM X 16.2CM"
            src="/art/art (1).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (2).jpg">
          <img
            alt="OJO DE PULPO - GOUACHE SOBRE HOT PRESS PAPER - 6.6 X 6.5CM"
            src="/art/art (2).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (3).jpg">
          <img
            alt="GASOLINERA - ACRÍLICO SOBRE LIENZO - 25.5 X 20.2 CM"
            src="/art/art (3).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (4).jpg">
          <img
            alt="Retrato - ACRÍLICO SOBRE GESSO BOARD - 18CM X 13CM"
            src="/art/art (4).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (7).jpg">
          <img
            alt="PIEDRA PINTURA "
            src="/art/art (7).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (6).jpg">
          <img
            alt="CIUDAD PINTURA"
            src="/art/art (6).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (5).jpg">
          <img
            alt="LE PETIT HONGO ESCULTURA"
            src="/art/art (5).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (8).jpg">
          <img
            alt="PRUEBA DE COLOR - PINTURA"
            src="/art/art (8).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (9).jpg">
          <img
            alt="MEDUSA - PINTURA"
            src="/art/art (9).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (10).jpg">
          <img
            alt="RETRATO - PINTURA"
            src="/art/art (10).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>

        <a href="/art/art (11).jpg">
          <img
            alt="PAISAJE - PINTURA"
            src="/art/art (11).jpg"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
        <a href="/art/art (2).PNG">
          <img
            alt="OPAL - DIGITAL ART - 2266PX X 1488PX"
            src="/art/art (2).PNG"
            className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            oncontextmenu="return false;"
          />
        </a>
      </LightGallery>
    </div>
  );
}
