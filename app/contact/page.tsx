import About from "@/components/About";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <About />
      <Contact />
    </main>
  );
}
