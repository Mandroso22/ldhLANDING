"use client";

import { useState, useEffect, useRef } from "react";

function Aboutus() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer pour animations au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap");

        .font-playfair {
          font-family: "Playfair Display", serif;
        }

        .font-space {
          font-family: "Space Grotesk", sans-serif;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-overlay {
          background: linear-gradient(
            135deg,
            rgba(50, 27, 21, 0.1) 0%,
            rgba(74, 42, 33, 0.05) 50%,
            rgba(248, 248, 248, 0.1) 100%
          );
        }
      `}</style>

      <section
        ref={sectionRef}
        className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Premier bloc - Image à gauche, texte à droite */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
            {/* Image 1 */}
            <div
              className={`relative group ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="img/pic7.jpg"
                  alt="Intérieur du restaurant Café Lyon"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Overlay avec effet */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                {/* Bordure décorative */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 opacity-60"
                  style={{ borderColor: "#321B15" }}
                ></div>
              </div>

              {/* Élément décoratif flottant */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 float-animation"></div>
            </div>

            {/* Contenu textuel principal */}
            <div
              className={`text-center lg:text-left space-y-6 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span
                    className="font-space text-sm font-medium"
                    style={{ color: "#321B15" }}
                  >
                    Depuis 2020
                  </span>
                </div>

                <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                    Café
                  </span>
                  <br />
                  <span style={{ color: "#321B15" }}>Lyon</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p
                  className="font-space text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
                  style={{ color: "#4a2a21" }}
                >
                  Un café authentique où chaque tasse raconte une histoire.
                  Découvrez nos cafés d'exception et nos pâtisseries artisanales
                  dans un cadre chaleureux au cœur de Lyon.
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-space font-medium">
                    Café d'exception
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-space font-medium">
                    Pâtisseries artisanales
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-space font-medium">
                    Ambiance lyonnaise
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Deuxième bloc - Texte à gauche, image à droite */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Zone de slogan */}
            <div
              className={`order-2 lg:order-1 ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center space-y-6">
                  {/* Citation décorative */}
                  <div className="relative">
                    <blockquote
                      className="font-space text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed -mt-8"
                      style={{ color: "#321B15" }}
                    >
                      Plus qu'un café,
                      <br />
                      <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        un art de vivre lyonnais
                      </span>
                    </blockquote>
                  </div>

                  {/* Sous-texte */}
                  <p
                    className="font-space text-base sm:text-lg leading-relaxed max-w-md mx-auto"
                    style={{ color: "rgb(186,176,175)" }}
                  >
                    Chaque grain de café est soigneusement sélectionné, chaque
                    pâtisserie est préparée avec passion. Bienvenue dans votre
                    café de quartier au cœur de Lyon.
                  </p>

                  {/* Call-to-action subtil */}
                  <div className="pt-4">
                    <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-space font-medium">
                      <span>Découvrir notre histoire</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div
              className={`order-1 lg:order-2 relative group ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="img/coffee1.jpg"
                  alt="Café et spécialités de Café Lyon"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Overlay avec effet */}
                <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                {/* Bordure décorative */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 opacity-60"
                  style={{ borderColor: "#321B15" }}
                ></div>
              </div>

              {/* Élément décoratif flottant */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-orange-200 to-amber-300 rounded-full opacity-20 float-animation"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>

          {/* Éléments décoratifs de fond */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div
              className="absolute top-1/2 right-20 w-1 h-1 bg-orange-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
