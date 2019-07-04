const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

//view engine setup
app.set('view engine', 'hbs');



//este es un servicio de ejemplo
// app.get('/', (req, res) => {

//     const salida = {
//         nombre: 'Ricardo',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida)
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ricardo pajarito'
            /*anio: new Date().getFullYear()*/
    });
});
app.get('/about', (req, res) => {
    res.render('about'
        /*, {
                anio: new Date().getFullYear()
            }*/
    );
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});