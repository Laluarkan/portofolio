import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Certificates, Contact, Experience, Footer, Projects } from "@/components/Sections";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";

export default function App() {
  return (
    <>
      <InteractiveBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
