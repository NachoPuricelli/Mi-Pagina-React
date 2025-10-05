const pool = require('../config/database');
const emailService = require('../utils/emailService');

const crearContacto = async (req, res) => {
  try {
    const { nombre, email, cod_area, celular, asunto, mensaje } = req.body;

    // Validaciones básicas
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        error: 'Nombre, email y mensaje son obligatorios'
      });
    }

    // Insertar en base de datos
    const query = `
      INSERT INTO contactos (nombre, email, cod_area, celular, asunto, mensaje)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    
    const values = [nombre, email, cod_area, celular, asunto, mensaje];
    const result = await pool.query(query, values);
    
    const nuevoContacto = result.rows[0];

    // Enviar email de notificación (opcional, comentado por ahora)
    // await emailService.enviarNotificacionContacto(nuevoContacto);

    res.status(201).json({
      mensaje: '✅ Mensaje enviado exitosamente',
      contacto: nuevoContacto
    });

  } catch (error) {
    console.error('Error al crear contacto:', error);
    res.status(500).json({
      error: 'Error interno del servidor'
    });
  }
};

const obtenerContactos = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM contactos ORDER BY fecha_creacion DESC'
    );
    
    res.json({
      contactos: result.rows,
      total: result.rows.length
    });
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    res.status(500).json({
      error: 'Error al obtener contactos'
    });
  }
};

module.exports = {
  crearContacto,
  obtenerContactos
};