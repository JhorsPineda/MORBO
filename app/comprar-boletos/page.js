import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TicketPurchase from "@/components/TicketPurchase";

export default function ComprarBoletosPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="pt-20 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center my-10">Comprar Boletos</h1>
        <TicketPurchase />
      </div>
      <Footer />
    </main>
  );
}
