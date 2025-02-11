import Image from "next/image"
import Link from "next/link"

const EventCard = ({ id, name, date, image, price }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-[#A0A0A0] mb-4">{date}</p>
        <p className="text-[#F90A12] font-bold mb-4">${price}</p>
        <div className="flex justify-between items-center">
          <Link
            href={`/comprar-boletos?eventId=${id}`}
            className="bg-[#F90A12] text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
          >
            Comprar Boletos
          </Link>
          <Link href={`/reservas?eventId=${id}`} className="text-[#F90A12] hover:underline">
            Reservar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard

