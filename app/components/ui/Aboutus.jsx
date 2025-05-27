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

    gsap.fromTo(
      image1Ref.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
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
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
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
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: text2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12">
      <div className="flex justify-center md:mb-16 mb-8 items-center">
        <img
          ref={image1Ref}
          src="img/pic5.png"
          alt="aboutus"
          className="w-[50vw] h-[30%] border-[1px] border-[#321B15] rounded-sm"
        />
        <div ref={text1Ref} className="text-center p-8">
          <h2 className="text-2xl text-[#321B15] uppercase font-bold md:text-6xl lg:text-8xl">
            La Douce Heure
          </h2>
          <p className="text-xs text-[#321B15] font-['Space_Grotesk']">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:mt-40 mt-16 items-center">
        <div ref={text2Ref} className="w-[50vw] h-[100%] rounded-xs">
          <strong className="text-[0.955rem] block text-center text-[#321B15] font-['Space_Grotesk'] md:text-2xl">
            Plus qu'une crêpe, un moment à partager.
          </strong>
        </div>
        <img
          ref={image2Ref}
          src="img/coffee1.jpg"
          alt="aboutus"
          className="w-[50vw] h-auto border-[1px] border-[#321B15] rounded-sm"
        />
      </div>
    </section>
  );
}

export default Aboutus;
