const express = require("express");
const { create } = require("express-handlebars");
const app = express();
const User = require("./models/Users");

// constante que indica el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// leer variables de entorno
require('dotenv').config();
// leer conexion a la base de datos
require("./database/db");

// lineas de configuracion de express handlebars
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// middleware public
// app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        // obtner el array con todos los usuarios
        const users = await User.find().lean();

        // for para mostrar cada usuario
        for (let i = 0; i < users.length; i++) {
            // imprimir los datos de los usuarios
            console.log(users[i]);
            // renderizar la vista
        }

        res.render("home", { users: users });
    } catch (err) {
        console.log("ERROR: ".red + err);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port: ` + `http://localhost:${PORT}`.green);
});