import EventCard from "./EventCard"

const events = [
  { id: 1, name: "Noche de los 80's", date: "15 de Junio", image: "/event-80s.jpg", price: 25 },
  { id: 2, name: "Rave Neón", date: "22 de Junio", image: "/event-rave.jpg", price: 30 },
  { id: 3, name: "Tributo 90's", date: "29 de Junio", image: "/event-90s.jpg", price: 25 },
]

const UpcomingEvents = () => {
  return (
    <section id="events" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents

