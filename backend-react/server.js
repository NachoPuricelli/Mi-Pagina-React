const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactoRoutes = require('./routes/contacto');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000', // URL de tu React
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/contacto', contactoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    mensaje: '🚀 Backend funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});