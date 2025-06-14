function Footer() {
  return (
    <footer className="w-full h-auto bg-[rgba(33,32,38,0.908)]">
      <div className="flex items-start justify-between px-4 py-8">
        <div className="text-white">
          <h3 className="text-xl uppercase font-semibold font-['Playfair_Display']">
            Café Lyon
          </h3>
          <p className="text-sm text-white/60 mt-2 font-['Space_Grotesk']">
            Votre café de quartier
          </p>
        </div>

        <div className="flex-1 flex flex-col items-end">
          <ul className="flex flex-col space-y-2 text-white">
            <li>
              <a
                href="#menu"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                Notre Carte
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                Réserver
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-xs font-['Space_Grotesk'] text-white/80 md:text-sm hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-6 flex space-x-4">
          <a
            href="https://instagram.com/cafelyon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/img/ig.png"
              alt="Suivez-nous sur Instagram"
              className="w-[24px] h-[24px] object-contain"
            />
          </a>
          <a
            href="https://facebook.com/cafelyon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/img/fb.png"
              alt="Suivez-nous sur Facebook"
              className="w-[24px] h-[24px] object-contain"
            />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-[0.7rem] text-white/40 font-['Space_Grotesk']">
            © {new Date().getFullYear()} Café Lyon - Tous droits réservés.{" "}
            <a
              href="https://makesocial.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/80 transition-colors underline underline-offset-2"
            >
              Propulsé par MakeSocial.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
