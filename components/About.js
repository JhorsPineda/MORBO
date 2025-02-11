const About = () => {
    return (
      <section id="about" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Acerca de MORBO</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="/about-image.jpg" alt="MORBO interior" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-base md:text-lg mb-6">
                MORBO es más que un bar, es una experiencia. Nacimos con la pasión de crear un espacio donde la música y
                la nostalgia se encuentran, ofreciendo a nuestros visitantes un viaje a través de las décadas más icónicas
                de la música.
              </p>
              <p className="text-base md:text-lg mb-6">
                Desde fiestas temáticas de los 80's y 90's hasta raves electrizantes, en MORBO encontrarás el ambiente
                perfecto para bailar, socializar y crear recuerdos inolvidables.
              </p>
              <p className="text-base md:text-lg">
                Únete a nosotros y sé parte de la revolución nocturna. En MORBO, cada noche es una aventura única.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  
  