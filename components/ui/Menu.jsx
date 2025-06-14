"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Menu() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation des cartes au scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-gradient-to-b from-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec animation */}
        <div className="flex justify-center items-center w-full text-center mb-20 relative">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] text-[#321B15] relative z-10">
              Notre Carte
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Carte Café & Pâtisseries */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="group relative rounded-2xl p-6 overflow-hidden cursor-pointer h-[300px] md:h-[400px]"
          >
            {/* Image en arrière-plan */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10"></div>
              <img
                src="/img/pic5.jpg"
                alt="Nos cafés signature et pâtisseries artisanales"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Contenu au premier plan */}
            <div className="relative z-20 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-['Space_Grotesk'] font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  Café & Pâtisseries
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Cafés Signature
                    </p>
                  </li>
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Viennoiseries Maison
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-['Space_Grotesk'] group-hover:bg-white/20 transition-colors duration-300">
                  Découvrir
                </span>
              </div>
            </div>
          </div>

          {/* Carte Brunch & Snacks */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="group relative rounded-2xl p-6 overflow-hidden cursor-pointer h-[300px] md:h-[400px]"
          >
            {/* Image en arrière-plan */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10"></div>
              <img
                src="/img/pic6.jpg"
                alt="Nos brunchs et snacks gourmands"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Contenu au premier plan */}
            <div className="relative z-20 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-['Space_Grotesk'] font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  Brunch & Snacks
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Tartines Gourmandes
                    </p>
                  </li>
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Salades Composées
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-['Space_Grotesk'] group-hover:bg-white/20 transition-colors duration-300">
                  Découvrir
                </span>
              </div>
            </div>
          </div>

          {/* Carte Boissons */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="group relative rounded-2xl p-6 overflow-hidden cursor-pointer h-[300px] md:h-[400px]"
          >
            {/* Image en arrière-plan */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 z-10"></div>
              <img
                src="/img/pic9.jpg"
                alt="Nos boissons et cocktails café"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Contenu au premier plan */}
            <div className="relative z-20 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-['Space_Grotesk'] font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  Boissons
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Thés & Infusions
                    </p>
                  </li>
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Jus Frais
                    </p>
                  </li>
                  <li className="flex items-center space-x-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                    <p className="text-lg font-['Playfair_Display']">
                      Cocktails Café
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-['Space_Grotesk'] group-hover:bg-white/20 transition-colors duration-300">
                  Découvrir
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
