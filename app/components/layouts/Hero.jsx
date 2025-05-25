function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src="/img/herobg.jpg"
          alt="Arrière-plan crêperie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Space_Grotesk'] text-white/95 z-9 backdrop-blur-sm p-5 rounded-sm bg-black/20">
        <h1 className="text-3xl mb-2.5 font-[playfair] uppercase">
          Pause douceur
        </h1>
        <p className="text-base text-white/80">
          Crêperie, 973 grande rue Miribel 01700
        </p>
      </div>
    </div>
  );
}

export default Hero;
