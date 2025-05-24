import Navbar from "./components/layouts/Navbar";
import Menu from "./components/ui/Menu";
import Location from "./components/ui/Location";
import Footer from "./components/layouts/Footer";
import Hero from "./components/layouts/Hero";
import Slider from "./components/ui/Slider";
import Aboutus from "./components/ui/Aboutus";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Slider />
      <Aboutus />
      <Location />
      <Footer />
    </>
  );
}
