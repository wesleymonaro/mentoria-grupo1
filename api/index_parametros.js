// const http = require('http');

// http.createServer((req, res) => {
//     res.write('{message: "Hello World"}');
//     res.end();
// }).listen(3000)


const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config({ path: '.env'})

const app = express();

// middleware
app.use(express.json()); // SEMELHANTE AO BODY PARSER, POR PADRÃO IRÁ RECEBER JSON.
app.use(morgan('dev')); // CONSOLE LOGS A CADA CHAMADA
app.use(cors()) // CROSS ORIGIN - PERMITE CHAMADAS DE ENDEREÇOS X
app.use(helmet()); // ADICIONA CAMADA DE SEGURANÇA CONTRA ATAQUES JÁ CONHECIDOS

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello world" })
})

app.get('/produtos', (req, res) => {
    return res.status(200).json([])
})

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params;

    console.log('id', id);
    return res.status(200).json({});
});

app.post('/produtos', (req, res) => {
    return res.status(200).json(req.body);
});

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({});
});

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    return res.status(204).send();
});



// PLUS

// QUERY STRING
// app.get('/produtos/search', (req, res) => {
//     return res.status(200).json(req.query)
// })

// HEADERS
// app.get('/produtos', (req, res) => {
//     return res.status(200).json(req.headers)
// })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running application on port ${process.env.PORT || 3000}`);
})