// Configuración de Express
const express = require("express");
const app = express();

// Habilitar CORS
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// Parsear solicitudes con formato JSON
app.use(express.json());

// Parsear solicitudes con formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Conectar a la base de datos
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado a la base de datos!");
  })
  .catch(err => {
    console.log("No se pudo conectar a la base de datos!", err);
    process.exit();
  });

// Ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenida a la aplicación de bezkoder." });
});

// Importar rutas
require("./app/routes/turorial.routes")(app);

// Establecer puerto y escuchar solicitudes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}.`);
});

