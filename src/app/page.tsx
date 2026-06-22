import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import GraphicDesign from "@/components/sections/GraphicDesign";
import VideoEditing from "@/components/sections/VideoEditing";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import GsapScrollProvider from "@/components/GsapScrollProvider";

export default function Home() {
  return (
    <GsapScrollProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee text="GRAPHIC DESIGN  —  VIDEO EDITING  —  CREATIVE DIRECTION " />
        <GraphicDesign />
        <VideoEditing />
        <About />
        <Contact />
      </main>
    </GsapScrollProvider>
  );
}
