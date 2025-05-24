function Slider() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,150px)] content-center justify-center p-16 gap-16">
      <img
        src="/img/pic3.jpeg"
        alt="Galerie image 1"
        className="w-[300px] mx-auto object-cover"
      />
      <img
        src="/img/pic1.jpeg"
        alt="Galerie image 2"
        className="w-[300px] mx-auto object-cover"
      />
      <img
        src="/img/pic4.jpeg"
        alt="Galerie image 3"
        className="w-[300px] mx-auto object-cover"
      />
      <img
        src="/img/pic5.png"
        alt="Galerie image 4"
        className="w-[300px] h-[187.5px] mx-auto object-cover"
      />
    </div>
  );
}

export default Slider;
