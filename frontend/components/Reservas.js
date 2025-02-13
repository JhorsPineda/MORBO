
import React, { useEffect, useState } from 'react';
import { getReservas, getEventos, createReserva } from '../services/api';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [selectedEvento, setSelectedEvento] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reservasData, eventosData] = await Promise.all([getReservas(), getEventos()]);
        setReservas(reservasData);
        setEventos(eventosData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    fetchData();
  }, []);

  const handleCreateReserva = async () => {
    if (!selectedEvento) {
      alert('Por favor selecciona un evento.');
      return;
    }
    const nuevaReserva = {
      usuario_id: 1,
      fecha_reserva: new Date().toISOString(),
      numero_personas: 4,
      evento_id: selectedEvento,
      nombre_cliente: 'Jhors',
      correo_cliente: 'jhors@example.com'
    };
    try {
      const reserva = await createReserva(nuevaReserva);
      setReservas([...reservas, reserva]);
    } catch (error) {
      console.error('Error al crear reserva:', error);
    }
  };

  return (
    <div>
      <h1>Reservas</h1>
      <div>
        <label>Selecciona un evento: </label>
        <select value={selectedEvento} onChange={(e) => setSelectedEvento(e.target.value)}>
          <option value="">--Selecciona un evento--</option>
          {eventos.map((evento) => (
            <option key={evento.id} value={evento.id}>
              {`${evento.nombre} - ${new Date(evento.fecha).toLocaleDateString()}`}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCreateReserva}>Crear Reserva</button>
      <h2>Listado de Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            {`Reserva para ${reserva.numero_personas} personas el ${new Date(reserva.fecha_reserva).toLocaleDateString()} - Evento: ${reserva.nombre_evento || 'N/A'} - Cliente: ${reserva.nombre_cliente}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservas;
