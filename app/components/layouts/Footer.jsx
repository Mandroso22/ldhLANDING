function Footer() {
  return (
    <footer className="w-full h-auto bg-[rgba(33,32,38,0.908)]">
      <div className="flex items-start justify-between px-4 py-8">
        <div className="text-white">
          <h3 className="text-xl uppercase font-semibold font-['Playfair_Display']">
            La douce heure
          </h3>
        </div>

        <div className="flex-1 flex flex-col items-end">
          <ul className="flex flex-col space-y-2 text-white">
            <li>
              <a
                href="#"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                Réserver
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                Contacter
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-6">
          <img
            src="/img/ig.png"
            alt="instagram"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-[0.7rem] text-white/40 font-['Space_Grotesk']">
            Powered by{" "}
            <a
              href="https://makesocial.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/80 transition-colors underline underline-offset-2"
            >
              MakeSocial.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
