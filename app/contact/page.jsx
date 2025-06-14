"use client";

import { useState } from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    mentionsLegales: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation en temps réel
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "nom":
      case "prenom":
        if (!value.trim()) {
          newErrors[name] = "Ce champ est obligatoire";
        } else if (value.length < 2) {
          newErrors[name] = "Minimum 2 caractères";
        } else {
          delete newErrors[name];
        }
        break;
      case "email":
        if (!value.trim()) {
          newErrors[name] = "L'email est obligatoire";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[name] = "Format d'email invalide";
        } else {
          delete newErrors[name];
        }
        break;
      case "telephone":
        if (value && !/^[\d\s\-\+\(\)]{10,}$/.test(value)) {
          newErrors[name] = "Format de téléphone invalide";
        } else {
          delete newErrors[name];
        }
        break;
      case "sujet":
        if (!value) {
          newErrors[name] = "Veuillez sélectionner un sujet";
        } else {
          delete newErrors[name];
        }
        break;
      case "message":
        if (!value.trim()) {
          newErrors[name] = "Le message est obligatoire";
        } else if (value.length < 10) {
          newErrors[name] = "Minimum 10 caractères";
        } else {
          delete newErrors[name];
        }
        break;
      case "mentionsLegales":
        if (!value) {
          newErrors[name] = "Vous devez accepter les mentions légales";
        } else {
          delete newErrors[name];
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    validateField(name, fieldValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation complète
    Object.keys(formData).forEach((key) => {
      if (key !== "telephone") {
        validateField(key, formData[key]);
      }
    });

    if (Object.keys(errors).length > 0) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'envoi API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Ici vous remplacerez par votre vraie API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus("success");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
        mentionsLegales: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
      `}</style>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* En-tête */}
        <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
          <div className="absolute inset-0 bg-[#321B15] bg-opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="font-playfair text-5xl md:text-6xl font-bold mb-6"
              style={{ color: "#321B15" }}
            >
              Contactez-nous
            </h1>
            <p
              className="font-space text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "rgb(186,176,175)" }}
            >
              Nous sommes là pour vous accueillir et répondre à toutes vos
              questions. N'hésitez pas à nous contacter pour vos réservations de
              groupe, demandes d'information ou suggestions.
            </p>
          </div>

          <div className="mt-12 max-w-6xl mx-auto px-4">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#321B15" }}
                  >
                    <svg
                      className="w-10 h-10 text-white shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p
                    className="font-playfair text-2xl font-semibold"
                    style={{ color: "#321B15" }}
                  >
                    Café Lyon
                  </p>
                  <p
                    className="font-space text-sm"
                    style={{ color: "rgb(186,176,175)" }}
                  >
                    42 Rue de la République
                    <br />
                    69002 Lyon, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Formulaire de contact */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h2
                  className="font-playfair text-3xl font-semibold mb-8"
                  style={{ color: "#321B15" }}
                >
                  Envoyez-nous un message
                </h2>

                {/* Messages de statut */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="font-space text-green-800 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message envoyé avec succès ! Nous vous répondrons
                      rapidement.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="font-space text-red-800 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Erreur lors de l'envoi. Veuillez vérifier vos
                      informations.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Prénom */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block font-space font-medium mb-2"
                        style={{ color: "#321B15" }}
                      >
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg font-space transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                          errors.nom
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        }`}
                        placeholder="Votre nom"
                      />
                      {errors.nom && (
                        <p className="mt-1 text-sm text-red-600 font-space">
                          {errors.nom}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="prenom"
                        className="block font-space font-medium mb-2"
                        style={{ color: "#321B15" }}
                      >
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg font-space transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                          errors.prenom
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        }`}
                        placeholder="Votre prénom"
                      />
                      {errors.prenom && (
                        <p className="mt-1 text-sm text-red-600 font-space">
                          {errors.prenom}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-space font-medium mb-2"
                        style={{ color: "#321B15" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg font-space transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        }`}
                        placeholder="votre.email@exemple.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 font-space">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="telephone"
                        className="block font-space font-medium mb-2"
                        style={{ color: "#321B15" }}
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg font-space transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                          errors.telephone
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                        }`}
                        placeholder="06 12 34 56 78"
                      />
                      {errors.telephone && (
                        <p className="mt-1 text-sm text-red-600 font-space">
                          {errors.telephone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <label
                      htmlFor="sujet"
                      className="block font-space font-medium mb-2"
                      style={{ color: "#321B15" }}
                    >
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg font-space transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                        errors.sujet
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      }`}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Réservation de groupe</option>
                      <option value="information">
                        Information sur nos cafés
                      </option>
                      <option value="evenement">
                        Organisation d'événement
                      </option>
                      <option value="reclamation">Réclamation</option>
                      <option value="autre">Autre</option>
                    </select>
                    {errors.sujet && (
                      <p className="mt-1 text-sm text-red-600 font-space">
                        {errors.sujet}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-space font-medium mb-2"
                      style={{ color: "#321B15" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg font-space transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none ${
                        errors.message
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      }`}
                      placeholder="Votre message..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 font-space">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Mentions légales */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="mentionsLegales"
                      name="mentionsLegales"
                      checked={formData.mentionsLegales}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 focus:ring-2"
                    />
                    <label
                      htmlFor="mentionsLegales"
                      className="font-space text-sm"
                      style={{ color: "rgb(186,176,175)" }}
                    >
                      J'accepte que mes données personnelles soient utilisées
                      pour traiter ma demande concernant Café Lyon. *
                    </label>
                  </div>
                  {errors.mentionsLegales && (
                    <p className="text-sm text-red-600 font-space">
                      {errors.mentionsLegales}
                    </p>
                  )}

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg font-space font-medium text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{
                      backgroundColor: "#321B15",
                      boxShadow: "0 4px 15px rgba(50, 27, 21, 0.3)",
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              </div>

              {/* Informations complémentaires */}
              <div className="space-y-8">
                {/* Informations de contact */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3
                    className="font-playfair text-2xl font-semibold mb-6"
                    style={{ color: "#321B15" }}
                  >
                    Nos coordonnées
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#4a2a21" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className="font-space font-medium"
                          style={{ color: "#321B15" }}
                        >
                          Adresse
                        </h4>
                        <p
                          className="font-space mt-1"
                          style={{ color: "rgb(186,176,175)" }}
                        >
                          42 Rue de la République
                          <br />
                          69002 Lyon, France
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#4a2a21" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className="font-space font-medium"
                          style={{ color: "#321B15" }}
                        >
                          Téléphone
                        </h4>
                        <p
                          className="font-space mt-1"
                          style={{ color: "rgb(186,176,175)" }}
                        >
                          04 78 92 15 36
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#4a2a21" }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className="font-space font-medium"
                          style={{ color: "#321B15" }}
                        >
                          Email
                        </h4>
                        <p
                          className="font-space mt-1"
                          style={{ color: "rgb(186,176,175)" }}
                        >
                          contact@cafelyon.fr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3
                    className="font-playfair text-2xl font-semibold mb-6"
                    style={{ color: "#321B15" }}
                  >
                    Horaires d'ouverture
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span
                        className="font-space font-medium"
                        style={{ color: "#321B15" }}
                      >
                        Lundi - Vendredi
                      </span>
                      <span
                        className="font-space"
                        style={{ color: "rgb(186,176,175)" }}
                      >
                        8h00 - 18h00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="font-space font-medium"
                        style={{ color: "#321B15" }}
                      >
                        Samedi
                      </span>
                      <span
                        className="font-space"
                        style={{ color: "rgb(186,176,175)" }}
                      >
                        9h00 - 19h00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span
                        className="font-space font-medium"
                        style={{ color: "#321B15" }}
                      >
                        Dimanche
                      </span>
                      <span
                        className="font-space"
                        style={{ color: "rgb(186,176,175)" }}
                      >
                        10h00 - 17h00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Carte Google Maps */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3
                    className="font-playfair text-2xl font-semibold mb-6"
                    style={{ color: "#321B15" }}
                  >
                    Nous trouver
                  </h3>

                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: "#f8f8f8" }}
                    >
                      <div className="text-center">
                        <div
                          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#321B15" }}
                        >
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <p
                          className="font-space text-sm"
                          style={{ color: "rgb(186,176,175)" }}
                        >
                          Carte Google Maps
                          <br />
                          <span className="text-xs">
                            (Intégration à configurer)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
