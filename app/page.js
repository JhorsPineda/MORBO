import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import UpcomingEvents from "../components/UpcomingEvents"
import Gallery from "../components/Gallery"
import About from "../components/About"
import Location from "../components/Location"
import EventReservation from "../components/EventReservation"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
         
        </div>
      </section>
      <Location />
      <About />
      <Footer />
    </main>
  )
}

