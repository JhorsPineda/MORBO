
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getEventos = async () => {
  try {
    const response = await axios.get(`${API_URL}/eventos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    throw error;
  }
};

export const getReservas = async () => {
  try {
    const response = await axios.get(`${API_URL}/reservas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener reservas:', error);
    throw error;
  }
};

export const createReserva = async (reservaData) => {
  try {
    const response = await axios.post(`${API_URL}/reservas`, reservaData);
    return response.data;
  } catch (error) {
    console.error('Error al crear reserva:', error);
    throw error;
  }
};
