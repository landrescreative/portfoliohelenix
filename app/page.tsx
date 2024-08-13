import Image from "next/image";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden justify-center items-center">
      <Hero />
      <hr className="w-11/12 mx-auto my-10 border-2" />

      <About />
      <hr className="w-11/12 mx-auto my-10 border-2" />
      <h1 className="text-xl opacity-50">GALERIA</h1>
      <Gallery />
    </main>
  );
}
