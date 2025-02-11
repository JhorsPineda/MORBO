import Link from "next/link"

const Hero = () => {
  const eventos = [
    {
      id: 1,
      title: "Noche Retro 80s",
      image: "/event1.jpg",
      link: "/eventos/noche-retro-80s",
    },
    {
      id: 2,
      title: "Electro Beats",
      image: "/event2.jpg",
      link: "/eventos/electro-beats",
    },
    {
      id: 3,
      title: "Fiesta House Vibes",
      image: "/event3.jpg",
      link: "/eventos/fiesta-house-vibes",
    },
  ]

  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white"></h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Donde la música y la nostalgia se encuentran
        </p>
        <Link
          href="#events"
          className="bg-[#F90A12] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors inline-block"
        >
          Descubre nuestros eventos
        </Link>
      </div>

      {/* Galería de eventos */}
      <div id="events" className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {eventos.map((evento) => (
          <Link
            key={evento.id}
            href={evento.link}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={evento.image}
              alt={evento.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-colors duration-300 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {evento.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Hero
