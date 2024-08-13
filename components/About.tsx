import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="  md:w-1/2 py-12 px-10 md:px-4 flex gap-10 flex-col md:flex-row items-center justify-center">
      {/* Photo Section */}
      <div className="w-3/4 h-auto relative">
        <Image
          width={2316}
          height={3088}
          src="/images/ele.jpg"
          alt="About Me"
          className="rounded-lg object-cover shadow-2xl"
        />
      </div>

      {/* Text Section */}
      <div className=" w-full md:pl-8">
        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
          Acerca de mi
        </h2>
        <p className="text-gray-700 text-lg mb-4 text-center md:text-left">
          Hola, soy Elena, una artista en desarrollo. Disfruto mucho expandir
          mis conocimientos en distintas ramas del arte, al igual que busco
          satisfacer mi curiosidad por distintas técnicas.
        </p>
        <p className="text-gray-700 text-lg mb-4 text-center md:text-left">
          Resido en la Ciudad de México, tengo 22 años, mi objetivo profesional
          es dedicarme al Concept Art para videojuegos/animación/novelas
          gráficas.
        </p>
        <p className="text-gray-700 text-lg mb-4 text-center md:text-left">
          Lo más importante para un artista es la observación, y la observación
          requiere paciencia.
        </p>
      </div>
    </div>
  );
};

export default About;
