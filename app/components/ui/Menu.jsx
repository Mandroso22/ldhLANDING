function Menu() {
  return (
    <section className="w-full mt-24">
      <div className="flex justify-center items-center w-full text-center text-white/95 uppercase tracking-[3px] text-[2.525rem] mb-16 font-bold relative">
        <h2 className="text-shadow-[1px_1px_1px_rgba(0,0,0,0.3)] text-7xl">
          Menu
        </h2>
      </div>

      <div className="mx-auto px-8 mb-60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#f8f8f8] relative border border-[#ddd] rounded-lg p-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] cursor-pointer">
            <div className="pr-24 md:pr-24">
              <h3 className="text-[1.325rem] font-['Space_Grotesk'] text-black mb-2">
                Crêpes / Waffle
              </h3>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Crêpes
              </p>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Waffle cups
              </p>
            </div>
            <div className="absolute -right-6 md:-right-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 rounded-full bg-[#eee] flex items-center justify-center shadow-md">
              <img
                src="/img/pic5.png"
                alt="Image décorative"
                className="w-23 h-23 md:w-46 md:h-46 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="bg-[#f8f8f8] relative border border-[#ddd] rounded-lg p-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] cursor-pointer">
            <div className="pr-24 md:pr-24">
              <h3 className="text-lg font-['Space_Grotesk'] text-black mb-2">
                Pokébowls / Sandwichs
              </h3>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Pastabowls
              </p>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Hot-dogs
              </p>
            </div>
            <div className="absolute -right-6 md:-right-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 rounded-full bg-[#eee] flex items-center justify-center shadow-md">
              <img
                src="/img/pic6.jpg"
                alt="Image décorative"
                className="w-23 h-23 md:w-46 md:h-46 object-cover rounded-full"
              />
            </div>
          </div>

          <div className="bg-[#f8f8f8] relative border border-[#ddd] rounded-lg p-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] cursor-pointer">
            <div className="pr-24 md:pr-24">
              <h3 className="text-[1.325rem] font-['Space_Grotesk'] text-black mb-2">
                Boissons
              </h3>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Milkshakes
              </p>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Smoothies
              </p>
              <p className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]">
                Soft
              </p>
            </div>
            <div className="absolute -right-6 md:-right-4 top-1/2 -translate-y-1/2 w-24 h-24 md:w-48 md:h-48 rounded-full bg-[#eee] flex items-center justify-center shadow-md">
              <img
                src="/img/pic7.jpg"
                alt="Image décorative"
                className="w-23 h-23 md:w-46 md:h-46 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
