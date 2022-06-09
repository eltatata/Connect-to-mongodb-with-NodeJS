const express = require("express");
const app = express();
const User = require("./models/Users");

// constante que indica el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// leer variables de entorno
require('dotenv').config();
// leer conexion a la base de datos
require("./database/db");

// middleware public
// app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.send("Hello World");
    try {
        // obtner el array con todos los usuarios
        const users = await User.find().lean();

        // for para mostrar cada usuario
        for (let i = 0; i < users.length; i++) {
            // imprimir los datos de los usuarios
            console.log(users[i]);  
        }
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port: ` + `http://localhost:${PORT}`.green);
});