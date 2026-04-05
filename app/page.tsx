import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import About from "@/components/about";
import Certificates from "@/components/certificates";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Footer />
      <FloatingContact />
    </main>
  );
}
