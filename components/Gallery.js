"use client"

import { useState } from "react"
import Image from "next/image"

const images = [
  { id: 1, src: "/gallery-1.jpg", alt: "Fiesta de los 80s" },
  { id: 2, src: "/gallery-2.jpg", alt: "Rave nocturno" },
  { id: 3, src: "/gallery-3.jpg", alt: "Tributo a los 90s" },
  { id: 4, src: "/gallery-4.jpg", alt: "Fiesta temática" },
  { id: 5, src: "/gallery-5.jpg", alt: "DJ en acción" },
  { id: 6, src: "/gallery-6.jpg", alt: "Multitud bailando" },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Galería de Eventos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:opacity-75 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery

