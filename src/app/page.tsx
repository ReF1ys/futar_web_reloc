import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyLoc from "@/components/KeyLocations"
import Success from "@/components/Success";
import Contact from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <KeyLoc/>
      <Success/>
      <Contact/>
      <Footer/>
    </>
  );
}
