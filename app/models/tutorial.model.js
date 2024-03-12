// Esquema de Tutorial
module.exports = mongoose => {
  var schema = mongoose.Schema({
    // Título
    title: String,
    // Descripción
    description: String,
    // Publicado
    published: Boolean
  }, { timestamps: true }); // Campos de fecha de creación y actualización

  // Agrega un método toJSON personalizado que devuelva el id en lugar del
  // _id de MongoDB
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject(); // Desestruturación
    object.id = _id; // Agrega el id a la salida
    return object; // Devuelve el objeto sin _id ni __v
  });

  // Crea el modelo Tutorial
  const Tutorial = mongoose.model("tutorial", schema);

  // Devuelve el modelo para su uso en las rutas
  return Tutorial;
};

