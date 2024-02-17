// index.js

const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./db/db"); // Importar la conexión a la base de datos
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar la solicitud de inicio de sesión
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM usuario WHERE correo = ? AND password = ?";

  mysqlConnection.query(
    sql,
    [req.body.correo, req.body.password],
    (err, data) => {
      if (err) res.json("error");
      if (data.length > 0) {
        return res.json("Usuario encontrado");
      } else {
        return res.json("Dont Found");
      }
    }
  );
});

app.post("/adduser", (req, res) => {
  const {
    nombre,
    apellido,
    tipo_documento,
    celular,
    identificacion,
    edad,
    peso,
    correo,
    password,
    id_role = 2,
    fecha,
    estado = 1,
  } = req.body;

  const sql ="INSERT INTO usuario (nombre, apellido, tipo_documento, celular, identificacion, edad, peso, correo, password, id_role, fecha, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    nombre,
    apellido,
    tipo_documento,
    celular,
    identificacion,
    edad,
    peso,
    correo,
    password,
    id_role,
    fecha,
    estado,
  ];

  mysqlConnection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error executing MySQL query: ", err);
      res.status(500).json({ message: "Error en el servidor" });
      return;
    }
    console.log("Usuario registrado con éxito");
    res.json({ message: "Usuario registrado con éxito" });
  });
});

// Escuchar en el puerto 3000
app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
