"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

function Location() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const mapRef = useRef(null);
  const infoCardRef = useRef(null);
  const contactButtonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

    gsap.fromTo(
      titleRef.current,
      {
        filter: "blur(10px)",
        scale: 0.8,
        opacity: 0,
      },
      {
        filter: "blur(0px)",
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      mapRef.current,
      {
        y: 100,
        rotationX: 15,
        opacity: 0,
        transformPerspective: 1000,
      },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      infoCardRef.current,
      {
        y: 50,
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        opacity: 0,
      },
      {
        y: 0,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoCardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      contactButtonRef.current,
      {
        y: 20,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactButtonRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    const icons = document.querySelectorAll(".icon-container");
    icons.forEach((icon) => {
      gsap.fromTo(
        icon,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full mt-16 mb-16" id="location">
      <div
        ref={titleRef}
        className="text-center text-white/95 font-bold uppercase tracking-[3px] p-4"
      >
        <h2 className="text-[2.525rem] text-shadow-[1px_1px_1px_rgba(0,0,0,0.3)]">
          Retrouvez-nous
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-8 mt-4">
          <div
            ref={mapRef}
            className="flex-1 min-h-[300px] rounded-lg overflow-hidden shadow-md transform-gpu"
          >
            <iframe
              className="w-full h-[400px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.013292013073!2d4.926073315567073!3d46.00400067911469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8b3b1b1b1b1b%3A0x3b1b1b1b1b1b1b1b!2sLa%20Douce%20Heure!5e0!3m2!1sfr!2sfr!4v1633946826823!5m2!1sfr!2sfr"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div
              ref={infoCardRef}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-sm transform-gpu"
            >
              <div className="flex items-start mb-6">
                <div className="icon-container flex-shrink-0 w-[50px] h-[50px] bg-[rgba(203,134,134,0.1)] rounded-full flex justify-center items-center mr-4">
                  <img
                    src="/img/calendar.png"
                    alt="Horaires"
                    width={30}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[1.3rem] mb-2 text-gray-800">Horaires</h3>
                  <p className="text-[1.1rem] text-gray-600 mb-1">
                    Lundi - Vendredi : 7h30 - 19h00
                  </p>
                  <p className="text-[1.1rem] text-gray-600">
                    Samedi - Dimanche : 8h00 - 20h00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="icon-container flex-shrink-0 w-[50px] h-[50px] bg-[rgba(203,134,134,0.1)] rounded-full flex justify-center items-center mr-4">
                  <img
                    src="/img/phone.png"
                    alt="Contact"
                    width={25}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[1.3rem] mb-2 text-gray-800">Contact</h3>
                  <p className="text-[1.1rem] text-gray-600">04 78 92 15 36</p>
                </div>
              </div>
            </div>
            <a
              ref={contactButtonRef}
              href="./contact"
              className="inline-block bg-[#321B15] text-white text-center hover:bg-[#4a2a21] px-4 py-2 rounded-md cursor-pointer transform-gpu mt-4"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
