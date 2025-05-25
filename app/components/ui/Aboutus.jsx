function Aboutus() {
  return (
    <section className="w-full py-16">
      <div className="flex justify-center items-center">
        <img
          src="img/pic5.png"
          alt="aboutus"
          className="w-[50vw] h-[70%] border-[1px] border-[#321B15] rounded-sm"
        />
        <div className="text-center p-8">
          <h2 className="text-2xl text-[#321B15] uppercase font-bold md:text-6xl lg:text-8xl">
            La Douce Heure
          </h2>
          <p className="text-xs text-[#321B15] font-['Space_Grotesk']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[50vw] h-[100%] rounded-sm">
          <strong className="text-[1.225rem] px-4 text-center text-[#321B15] font-['Space_Grotesk'] md:text-2xl">
            Plus qu'une crêpe, un moment à partager.
          </strong>
        </div>
        <img
          src="img/coffee1.jpg"
          alt="aboutus"
          className="w-[50vw] h-auto border-[1px] border-[#321B15] rounded-sm"
        />
      </div>
    </section>
  );
}

export default Aboutus;
