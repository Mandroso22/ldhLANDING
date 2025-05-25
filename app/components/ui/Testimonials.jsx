"use client";

import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Données d'exemple d'avis Google (à remplacer par vos vraies données)
  const reviews = [
    {
      id: 1,
      name: "Adam 69",
      rating: 5,
      date: "Il y a 2 semaines",
      text: "Si vous cherchez le meilleur bar à desserts du monde, ne cherchez plus, vous l'avez trouvé ! Chaque bouchée est une explosion de saveurs, les textures sont maîtrisées à la perfection, et l'attention aux détails est incroyable. On sent la passion et le savoir-faire derrière chaque création. L'ambiance est chaleureuse, le service impeccable, et les desserts... une vraie extase culinaire ! Impossible de repartir sans avoir goûté plusieurs douceurs tant le choix est irrésistible.À tester absolument, vous ne serez pas déçus !",
      avatar: "AD",
    },
    {
      id: 2,
      name: "Raphael Magnier",
      rating: 5,
      date: "Il y a 1 mois",
      text: "Très heureux d'avoir découvert cette adresse, je suis venue plusieurs fois depuis l'ouverture et vraiment jamais déçu ! Le choix et top ! On peu manger sucré ou salé c'est merveilleux tout est bon et l'ambiance un régal ! Je recommande vraiment",
      avatar: "RM",
    },
    {
      id: 3,
      name: "Mister S",
      rating: 5,
      date: "Il y a 3 semaines",
      text: "Très belle expérience dans ce lieu qui fait voyager vers l'Italie le temps d'un instant. Endroit très convivial, et accueillant. Parfait pour manger, ou même simplement pour une petite pause grignotage.Je recommande !",
      avatar: "MS",
    },
    {
      id: 4,
      name: "Marie-Jose Seveyrac",
      rating: 4,
      date: "Il y a 1 semaine",
      text: "Accueil très agréable, j'ai découvert le chocolat chaud italien qui est un délice. Les prix sont corrects. Je referais une petite halte dans cette endroit avec plaisirs. Je recommande vivement.",
      avatar: "MJS",
    },
    {
      id: 5,
      name: "Solveig Fernagu",
      rating: 5,
      date: "Il y a 4 jours",
      text: "Le milk shake extra.Le bowl est super bon même si ce n’est pas du riz noir. C’est frais, et super gentille hôtesse. Top ❤️❤️",
      avatar: "SF",
    },
  ];

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Auto-rotation des avis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Animation d'apparition
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 transition-all duration-300 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(250, 204, 21, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(250, 204, 21, 0.6);
          }
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .gradient-mesh {
          background: linear-gradient(
            135deg,
            rgba(50, 27, 21, 0.05) 0%,
            rgba(74, 42, 33, 0.08) 25%,
            rgba(248, 248, 248, 0.1) 50%,
            rgba(186, 176, 175, 0.05) 75%,
            rgba(50, 27, 21, 0.03) 100%
          );
        }
      `}</style>

      <section
        className={`py-20 px-4 gradient-mesh transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* En-tête moderne avec statistiques */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div
                className="w-96 h-96 rounded-full border-2 border-dashed animate-spin-slow"
                style={{ borderColor: "#321B15" }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
                <div className="flex items-center space-x-1">
                  {renderStars(5)}
                </div>
                <span
                  className="font-space font-semibold text-2xl"
                  style={{ color: "#321B15" }}
                >
                  {averageRating.toFixed(1)}
                </span>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span
                  className="font-space text-sm"
                  style={{ color: "rgb(186,176,175)" }}
                >
                  Google Reviews
                </span>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
                Ce que disent nos clients
              </h2>

              <p
                className="font-space text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "rgb(186,176,175)" }}
              >
                Découvrez les avis authentiques de nos clients qui ont vécu
                <span className="font-medium" style={{ color: "#4a2a21" }}>
                  {" "}
                  l'expérience La Douce Heure
                </span>
              </p>
            </div>
          </div>

          {/* Grille d'avis avec mise en avant dynamique */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Avis principal en rotation */}
            <div className="lg:col-span-2">
              <div className="relative h-80 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-2xl">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`absolute inset-0 p-8 transition-all duration-700 transform ${
                      index === currentReview
                        ? "opacity-100 translate-x-0"
                        : index < currentReview
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-space font-bold text-lg shadow-lg float-animation"
                        style={{ backgroundColor: "#321B15" }}
                      >
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <h4
                          className="font-space font-semibold text-xl mb-1"
                          style={{ color: "#321B15" }}
                        >
                          {review.name}
                        </h4>
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                          <span
                            className="font-space text-sm"
                            style={{ color: "rgb(186,176,175)" }}
                          >
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    <blockquote
                      className="font-space text-lg leading-relaxed"
                      style={{ color: "#4a2a21" }}
                    >
                      "{review.text}"
                    </blockquote>

                    {/* Guillemets décoratifs */}
                    <div
                      className="absolute top-4 right-6 text-6xl opacity-10"
                      style={{ color: "#321B15" }}
                    >
                      "
                    </div>
                  </div>
                ))}

                {/* Indicateurs de progression */}
                <div className="absolute bottom-6 left-8 flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentReview
                          ? "bg-yellow-400 shadow-lg pulse-glow"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Statistiques et logo Google */}
            <div className="space-y-6">
              {/* Carte Google Business */}
              <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-space font-semibold"
                      style={{ color: "#321B15" }}
                    >
                      Google Business
                    </h3>
                    <p
                      className="font-space text-sm"
                      style={{ color: "rgb(186,176,175)" }}
                    >
                      Avis certifiés
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="text-center p-3 rounded-2xl"
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <div
                      className="font-playfair text-2xl font-bold"
                      style={{ color: "#321B15" }}
                    >
                      {reviews.length}+
                    </div>
                    <div
                      className="font-space text-sm"
                      style={{ color: "rgb(186,176,175)" }}
                    >
                      Avis clients
                    </div>
                  </div>
                  <div
                    className="text-center p-3 rounded-2xl"
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    <div className="font-playfair text-2xl font-bold text-yellow-500">
                      {averageRating.toFixed(1)}★
                    </div>
                    <div
                      className="font-space text-sm"
                      style={{ color: "rgb(186,176,175)" }}
                    >
                      Note moyenne
                    </div>
                  </div>
                </div>
              </div>

              {/* Call-to-action moderne */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <h4
                    className="font-playfair text-xl font-semibold mb-2"
                    style={{ color: "#321B15" }}
                  >
                    Votre avis compte !
                  </h4>
                  <p
                    className="font-space text-sm mb-4"
                    style={{ color: "rgb(186,176,175)" }}
                  >
                    Partagez votre expérience et aidez d'autres gourmands à
                    découvrir La Douce Heure
                  </p>
                  <button className="font-space font-medium px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <span style={{ color: "#321B15" }}>Laisser un avis</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mini carousel d'avis en bas */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={review.id}
                className={`bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 1 ? "md:scale-105" : ""
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-space font-bold"
                    style={{ backgroundColor: "#4a2a21" }}
                  >
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h5
                      className="font-space font-medium text-sm"
                      style={{ color: "#321B15" }}
                    >
                      {review.name}
                    </h5>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p
                  className="font-space text-sm leading-relaxed"
                  style={{ color: "#4a2a21" }}
                >
                  "{review.text.substring(0, 120)}..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
