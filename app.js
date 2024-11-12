// Importar la librería
const express = require('express');

// Puerto en el que correrá el servidor
const PORT = 3000;

// Crear la instancia de la aplicación
const app = express();

// Ruta inicial que redirige a index.html
app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html');
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Escuchar en el puerto y en todas las interfaces de red
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://3.234.160.30:${PORT}`);
});

app.get('/', (req, resp) => {
    console.log('Cargando index.html');
    resp.sendFile(__dirname + '/index.html');
})