"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loadingState, setLoadingState] = useState("initial"); // "initial" | "loading" | "loaded" | "error"

  // Variants pour les animations avec des courbes d'accélération valides
  const imageVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleImageLoad = () => {
    console.log("Image chargée avec succès");
    setLoadingState("loaded");
    setIsLoaded(true);
  };

  const handleImageError = (e) => {
    console.error("Erreur de chargement de l'image:", e);
    setLoadingState("error");
    setImageError(true);
  };

  // Log pour le débogage
  useEffect(() => {
    console.log("État de chargement:", loadingState);
    console.log("Erreur d'image:", imageError);
  }, [loadingState, imageError]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {loadingState !== "error" && (
            <>
              {/* Image avec Next/Image pour une meilleure optimisation */}
              <motion.div
                key="hero-image-container"
                className="absolute inset-0"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <Image
                  src={imageError ? "/img/herobg.jpg" : "/img/herobg.webp"}
                  alt="Arrière-plan café"
                  fill
                  priority
                  quality={90}
                  className="object-cover"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  sizes="100vw"
                />
              </motion.div>

              {/* Overlay avec animation */}
              <motion.div
                key="hero-overlay"
                className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 transform-gpu"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={overlayVariants}
              />
            </>
          )}
        </AnimatePresence>

        {/* État de chargement */}
        {loadingState === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Message d'erreur */}
        {loadingState === "error" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <p className="text-white text-center px-4">
              Désolé, l'image n'a pas pu être chargée. Veuillez rafraîchir la
              page.
            </p>
          </div>
        )}
      </div>

      {/* Texte avec animation */}
      {isLoaded && (
        <motion.div
          key="hero-text"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Space_Grotesk'] text-white/95 z-9 backdrop-blur-sm p-5 rounded-sm bg-black/20"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            key="hero-title"
            className="text-3xl mb-2.5 font-[playfair] uppercase"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              },
            }}
          >
            Café & Pâtisseries
          </motion.h1>
          <motion.p
            key="hero-subtitle"
            className="text-base text-white/80"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.9 },
              },
            }}
          >
            Café Lyon, 42 Rue de la République, 69002 Lyon
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

export default Hero;
