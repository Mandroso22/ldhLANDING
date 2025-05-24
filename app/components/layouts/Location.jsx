function Location() {
  return (
    <section className="w-full" id="location">
      <div className="text-center mt-16 p-16">
        <h2 className="text-[1.225rem]">Nous trouver</h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-8 mt-4">
          <div className="flex-1 min-h-[300px] rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-[400px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.013292013073!2d4.926073315567073!3d46.00400067911469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8b3b1b1b1b1b%3A0x3b1b1b1b1b1b1b1b!2sLa%20Douce%20Heure!5e0!3m2!1sfr!2sfr!4v1633946826823!5m2!1sfr!2sfr"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-[50px] h-[50px] bg-[rgba(203,134,134,0.1)] rounded-full flex justify-center items-center mr-4">
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
                    Lundi - Vendredi : 10h - 18h
                  </p>
                  <p className="text-[1.1rem] text-gray-600">
                    Samedi - Dimanche : 10h - 20h
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-[50px] h-[50px] bg-[rgba(203,134,134,0.1)] rounded-full flex justify-center items-center mr-4">
                  <img
                    src="/img/phone.png"
                    alt="Contact"
                    width={25}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[1.3rem] mb-2 text-gray-800">Contact</h3>
                  <p className="text-[1.1rem] text-gray-600">04 74 00 00 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
