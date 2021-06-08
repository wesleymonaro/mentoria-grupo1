const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config({ path: '.env' })

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello world" })
});

app.use('/v1', require('./src/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running application on port ${process.env.PORT || 3000}`);
})