'use strict'
require('dotenv').config();
const nodemailer = require('nodemailer');
// var validator = require('validator'); // Para futuras modificaciones

var controller = {
    envioEmail: async (req, res) =>{
        const host = 'smtp.gmail.com';
        const puerto = '587';

        const usuario_mail = process.env.EMAIL;
        const contraseña_mail = process.env.PASSWORD;
        const {name, email, subject, message} = req.body; // Destructuro los datos del JSON que se envian
        
        var contentHTML = `
            <h1> Información del usuario</h1>
            <ul>
                <li>Usuario: ${name}</li>
                <li>Email: ${email}</li>
                <li>Asunto: ${subject}</li>
            </ul>
            <p>${message}</p>
        `;
    
        const transporter = nodemailer.createTransport({
            host: host,
            port: puerto,
            secure: false,
            auth: {
                user: usuario_mail,
                pass: contraseña_mail
            }
        });
    
        const info = await transporter.sendMail({
            from: 'email',
            to: 'fabricionarvaeztest@gmail.com',
            subject: 'Formulario de contacto',
            html: contentHTML
        });
    
        /*swal(
            "¡Formulario enviado!", 
            "El formulario se ha enviado correctamente, pronto recibirá una respuesta", 
            "success"
        );*/
        
        //res.redirect('/index.html');
        res.send("<script>alert('Formulario enviado correctamente'); window.location.href = '/index.html'; </script>");
    }
};

module.exports = controller;