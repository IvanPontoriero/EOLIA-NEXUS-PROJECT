//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express');
const app = express();
const mainRoute = require('./routes/main'); // rutas
const bodyParser = require('body-parser');
// Creamos el puerto
const PORT = process.env.PORT || 8080;

//Habilitar body-parser para leer datos de formularios - middleware(va antes de las rutas)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // CORS - Middleware de Aplicación - Permite mandar HTTPS mediante los headers y tener acceso a nuestras rutas
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Request-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', mainRoute)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

server.on('error', (err) => {
    console.log(`Error: ${err}`)
});