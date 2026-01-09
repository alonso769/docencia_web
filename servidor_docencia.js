const express = require('express');
const path = require('path');

const app = express();

// --- CONFIGURACIÓN ---
const PUERTO = 3007; // Usamos un puerto distinto al anterior
const IP_SERVIDOR = '0.0.0.0';

// Servir los archivos estáticos (HTML, CSS, Imágenes)
app.use(express.static(path.join(__dirname)));

// Ruta principal para servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PUERTO, IP_SERVIDOR, () => {
    console.log(`✅ Web Docencia lista en: http://10.0.20.225:${PUERTO}`);
});