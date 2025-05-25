import Navbar from "./components/layouts/Navbar";
import Menu from "./components/ui/Menu";
import Location from "./components/ui/Location";
import Footer from "./components/layouts/Footer";
import Hero from "./components/layouts/Hero";
import Slider from "./components/ui/Slider";
import Aboutus from "./components/ui/Aboutus";
import Testimonials from "./components/ui/Testimonials";
import Aboutus2 from "./components/ui/Aboutus2";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Aboutus />
      <Aboutus2 />
      <Slider />
      <Testimonials />
      <Location />
      <Footer />
    </>
  );
}
