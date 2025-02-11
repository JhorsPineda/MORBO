const Location = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">¿Dónde estamos ubicados?</h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.724018371458!2d-74.0620477666018!3d4.643239600538671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b007732adfb%3A0xbeee8f43fca7cc2e!2sMorbo%20Bar!5e0!3m2!1ses-419!2sco!4v1739304461271!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-2xl font-bold mb-6 hover:text-[#F90A12] transition-colors duration-300">
              Encuéntranos aquí
            </h3>            <p className="text-sm md:text-lg mb-4">
              Calle 57 # 7-17
              <br />
              Chapinero
              <br />
              Bogotá, Colombia
            </p>
            <h4 className="text-lg md:text-xl font-semibold mb-2 hover:text-[#F90A12] transition-colors duration-300">Horarios:</h4>
            <p className="text-base md:text-lg mb-4">
              Viernes: 9:00 PM - 5:00 AM
              <br />
              Sábados: 9:00 PM - 5:00 AM
            </p>
            <p className="text-base md:text-lg">
              Para reservaciones y eventos privados, contáctanos al:
              <br />
              <a href="tel:+123456789" className="text-[#F90A12] hover:underline">
                +57 324 332 9747
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
