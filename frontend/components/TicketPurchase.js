"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

const events = [
  { id: 1, name: "Noche de los 80's", date: "15 de Junio", image: "/event-80s.jpg", price: 25 },
  { id: 2, name: "Rave Neón", date: "22 de Junio", image: "/event-rave.jpg", price: 30 },
  { id: 3, name: "Tributo 90's", date: "29 de Junio", image: "/event-90s.jpg", price: 25 },
]

const paymentMethods = [
  { id: "pse", name: "PSE" },
  { id: "daviplata", name: "Daviplata" },
  { id: "nequi", name: "Nequi" },
  { id: "debit", name: "Tarjeta Débito" },
]

const TicketPurchase = () => {
  const [selectedEvent, setSelectedEvent] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
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
    // Aquí iría la lógica de procesamiento de pago
    console.log("Compra realizada:", { selectedEvent, quantity, name, email, paymentMethod })
    // Redirigir a una página de confirmación
    router.push("/confirmacion")
  }

  const selectedEventDetails = events.find((event) => event.id === Number(selectedEvent))

  return (
    <div className="max-w-4xl mx-auto bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Comprar Boletos</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="event" className="block text-sm font-medium text-gray-300 mb-2">
              Selecciona un evento
            </label>
            <select
              id="event"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
              required
            >
              <option value="">Selecciona un evento</option>
              {events.map((event) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
              Cantidad de boletos
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-300 mb-2">
              Método de pago
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-600 focus:outline-none focus:ring-[#F90A12] focus:border-[#F90A12] sm:text-sm rounded-md bg-gray-700 text-white"
              required
            >
              <option value="">Selecciona un método de pago</option>
              {paymentMethods.map((method) => (
                <option key={method.id} value={method.id}>
                  {method.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedEventDetails && (
          <div className="text-lg font-semibold text-center">Total: ${selectedEventDetails.price * quantity}</div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F90A12] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F90A12]"
        >
          Comprar Boletos
        </button>
      </form>
    </div>
  )
}

export default TicketPurchase

