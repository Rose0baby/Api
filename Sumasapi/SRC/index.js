const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//configuracion del servidor puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log("SERVIDOR EN EL PUERTO 3000");
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        "Title": "Hola Mundo"
    });
});

// SUMA
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ 'error': 'Faltan numeros para sumar' });
    }

    const resultado = num1 + num2;
    res.send({ resultado });
});

// RESTA
app.post('/restar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ 'error': 'Faltan numeros para restar' });
    }

    const resultado = num1 - num2;
    res.send({ resultado });
});

// MULTIPLICACIÓN
app.post('/multiplicar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ 'error': 'Faltan numeros para multiplicar' });
    }

    const resultado = num1 * num2;
    res.send({ resultado });
});
