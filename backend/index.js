require('dotenv').config();


const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const routes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.listen(port, () => {
    console.log(`Backend running http://localhost:${port}`);
});


