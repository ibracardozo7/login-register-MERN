const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers")

const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  return res.json({ mensaje: "Hola ibra"})
})
app.get("/user/:userId", controllers.getUserById)
app.post("/register", controllers.register)
app.post("/login", controllers.login)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${port}`);
  db();
});

module.exports = app