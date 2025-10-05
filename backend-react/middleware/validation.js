const validarContacto = (req, res, next) => {
  const { nombre, email, mensaje } = req.body;
  const errors = [];

  // Validar nombre
  if (!nombre || nombre.trim().length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres');
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Email inválido');
  }

  // Validar mensaje
  if (!mensaje || mensaje.trim().length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Datos inválidos',
      detalles: errors
    });
  }

  next();
};

module.exports = { validarContacto };