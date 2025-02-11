"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

const futureEvents = [
  { id: 1, name: "Fiesta de Halloween", date: "31 de Octubre", capacity: 200, image: "/halloween-party.jpg" },
  { id: 2, name: "Año Nuevo Retro", date: "31 de Diciembre", capacity: 300, image: "/new-year-party.jpg" },
  { id: 3, name: "San Valentín Disco", date: "14 de Febrero", capacity: 150, image: "/valentines-disco.jpg" },
]

const EventReservation = () => {
  const [selectedEvent, setSelectedEvent] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [guests, setGuests] = useState(1)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const eventId = searchParams.get("eventId")
    if (eventId) {
      setSelectedEvent(eventId)
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la reserva
    console.log("Reserva realizada:", { selectedEvent, name, email, guests })
    // Redirigir a una página de confirmación
    router.push("/confirmacion-reserva")
  }

  const selectedEventDetails = futureEvents.find((event) => event.id === Number(selectedEvent))

  return (
    <div className="max-w-4xl mx-auto bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu lugar</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="event" className="block text-sm font-medium text-gray-300 mb-2">
              Selecciona un evento futuro
            </label>
            <select
              id="event"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
              required
            >
              <option value="">Selecciona un evento</option>
              {futureEvents.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name} - {event.date}
                </option>
              ))}
            </select>
          </div>
          {selectedEventDetails && (
            <div className="flex items-center justify-center">
              <Image
                src={selectedEventDetails.image || "/placeholder.svg"}
                alt={selectedEventDetails.name}
                width={200}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2">
            Número de invitados
          </label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        {selectedEventDetails && (
          <div className="text-sm text-gray-300 text-center">
            Capacidad del evento: {selectedEventDetails.capacity} personas
          </div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F90A12] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F90A12]"
        >
          Hacer Reserva
        </button>
      </form>
    </div>
  )
}

export default EventReservation

