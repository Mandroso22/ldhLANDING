function Cardmenu({ title, subtitles, image }) {
  return (
    <div className="bg-[#f8f8f8] relative border border-[#ddd] rounded-lg p-4 shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] cursor-pointer">
      <div className="pr-12 md:pr-24">
        <h3 className="text-[1.325rem] font-['Space_Grotesk'] text-black mb-2">
          {title}
        </h3>
        {subtitles.map((subtitle, index) => (
          <p
            key={index}
            className="text-[1.225rem] font-['Playfair_Display'] text-[rgb(186,176,175)]"
          >
            {subtitle}
          </p>
        ))}
      </div>
      <div className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-48 md:h-48 rounded-full bg-[#eee] flex items-center justify-center shadow-md">
        <img
          src={image}
          alt={title}
          className="w-11 h-11 md:w-46 md:h-46 object-cover rounded-full"
        />
      </div>
    </div>
  );
}

export default Cardmenu;
