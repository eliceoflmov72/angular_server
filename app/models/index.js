// Configuración de la base de datos
const dbConfig = require("../config/db.config.js");

// Inicialización de mongoose
const mongoose = require("mongoose");

// Habilitar promesas en mongoose
mongoose.Promise = global.Promise;

// Objeto que contiene la conexión a la base de datos
const db = {};

// Mongoose
db.mongoose = mongoose;

// URL de la base de datos
db.url = dbConfig.url;

// Modelo de tutorial
db.tutorials = require("./tutorial.model.js")(mongoose);

// Exportar objeto de conexión a la base de datos
module.exports = db;

