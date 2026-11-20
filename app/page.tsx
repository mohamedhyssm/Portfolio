import { Navbar } from "@/components/shared/navbar";
import { IntroCurtain, ScrollProgress } from "@/components/shared/page-chrome";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import Projects from "@/components/sections/projects/projects";
import Footer from "@/components/sections/footer";
import FloatingContact from "@/components/shared/floating-contact";

export default function Home() {
  return (
    <>
      <IntroCurtain />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
