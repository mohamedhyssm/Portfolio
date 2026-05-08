import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/sections/hero";
import About from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";
import FloatingContact from "@/components/shared/floating-contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <FloatingContact />
    </main>
  );
}
