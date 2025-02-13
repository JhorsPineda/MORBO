import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-[#F90A12]">
              MORBO
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Donde la música y la nostalgia se encuentran. El mejor lugar para vivir experiencias únicas.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link href="/Eventos" className="block text-gray-400 hover:text-white">
                Eventos
              </Link>
              <Link href="/Galeria" className="block text-gray-400 hover:text-white">
                Galería
              </Link>
              <Link href="/Nosotros" className="block text-gray-400 hover:text-white">
                Nosotros
              </Link>
              <Link href="/Ubicacion" className="block text-gray-400 hover:text-white">
                Ubicación
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>Calle 57 #7-17, Chapinero</p>
              <p>Bogotá, Colombia</p>
              <p className="mt-2">Tel: 324 332 9747</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Trabaja con nosotros</h3>
            <div className="space-y-2">
              <Link href="/promotores" className="block text-gray-400 hover:text-white">
                Sé un promotor
              </Link>
              <Link href="/empleo" className="block text-gray-400 hover:text-white">
                Oportunidades laborales
              </Link>
              <Link href="/dj-registro" className="block text-gray-400 hover:text-white">
                Registro de DJs
              </Link>
              <Link href="/contacto-comercial" className="block text-gray-400 hover:text-white">
                Contacto comercial
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 MORBO. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link href="/terminos-promotores" className="hover:text-white">
              Términos y condiciones para promotores
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

