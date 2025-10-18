const nodemailer = require('nodemailer');
require('dotenv').config();

// Crear transporter
let transporter;
try {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
} catch (error) {
  console.warn('⚠️ No se pudo configurar el servicio de email:', error.message);
}

const enviarNotificacionContacto = async (contacto) => {
  if (!transporter) {
    console.log('⚠️ Servicio de email no disponible');
    return;
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo contacto: ${contacto.asunto || 'Sin asunto'}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${contacto.nombre}</p>
        <p><strong>Email:</strong> ${contacto.email}</p>
        <p><strong>Teléfono:</strong> ${contacto.cod_area || ''} ${contacto.celular || 'No proporcionado'}</p>
        <p><strong>Asunto:</strong> ${contacto.asunto || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${contacto.mensaje}</p>
        <hr>
        <p><small>Enviado el: ${contacto.fecha_creacion}</small></p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email de notificación enviado');
  } catch (error) {
    console.error('❌ Error enviando email:', error.message);
  }
};

module.exports = { enviarNotificacionContacto };