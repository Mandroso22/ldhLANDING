"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Aboutus() {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const text1Ref = useRef(null);
  const image2Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation plus douce avec easing
    const easeOutExpo = "power2.out";

    gsap.fromTo(
      image1Ref.current,
      {
        x: -100,
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      text1Ref.current,
      {
        x: 100,
        opacity: 0,
        y: 20,
      },
      {
        x: 0,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: text1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      text2Ref.current,
      {
        x: -100,
        opacity: 0,
        y: 20,
      },
      {
        x: 0,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: text2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      {
        x: 100,
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: easeOutExpo,
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 bg-gradient-to-b from-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premier bloc */}
        <div className="flex flex-col md:flex-row justify-center md:mb-24 mb-12 items-center gap-8 md:gap-12">
          <div className="relative group w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
              <img
                ref={image1Ref}
                src="img/pic5.png"
                alt="Intérieur chaleureux de Café Lyon avec ses tables en bois et son ambiance cosy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              {/* Overlay avec effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              {/* Bordure décorative */}
              <div className="absolute inset-0 rounded-lg border-2 border-[#321B15]/20 group-hover:border-[#321B15]/40 transition-colors duration-300"></div>
            </div>
          </div>

          <div
            ref={text1Ref}
            className="text-center md:text-left p-4 md:p-8 w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl text-[#321B15] font-bold font-['Playfair_Display'] leading-tight mb-4">
              Café Lyon
            </h2>
            <p className="text-sm md:text-base text-[#321B15]/80 font-['Space_Grotesk'] leading-relaxed max-w-lg">
              Un café authentique au cœur de Lyon, où chaque tasse raconte une
              histoire et chaque visite devient un moment précieux.
            </p>
          </div>
        </div>

        {/* Deuxième bloc */}
        <div className="flex flex-col-reverse md:flex-row justify-center md:mt-24 mt-12 items-center gap-8 md:gap-12">
          <div ref={text2Ref} className="w-full md:w-1/2 p-4 md:p-8">
            <strong className="text-lg md:text-2xl lg:text-3xl block text-center md:text-left text-[#321B15] font-['Space_Grotesk'] leading-relaxed">
              Plus qu'un café,{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                un art de vivre lyonnais
              </span>
            </strong>
          </div>

          <div className="relative group w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl">
              <img
                ref={image2Ref}
                src="img/coffee1.jpg"
                alt="Notre café signature et nos pâtisseries artisanales, préparés avec passion"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay avec effet de survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              {/* Bordure décorative */}
              <div className="absolute inset-0 rounded-lg border-2 border-[#321B15]/20 group-hover:border-[#321B15]/40 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
