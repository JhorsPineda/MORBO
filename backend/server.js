
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

// Rutas para eventos
app.get('/api/eventos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM eventos');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
});

// Rutas para reservas
app.post('/api/reservas', async (req, res) => {
  const { usuario_id, fecha_reserva, numero_personas, evento_id, nombre_cliente, correo_cliente } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO reservas (usuario_id, fecha_reserva, numero_personas, evento_id, nombre_cliente, correo_cliente) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [usuario_id, fecha_reserva, numero_personas, evento_id, nombre_cliente, correo_cliente]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear reserva' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
