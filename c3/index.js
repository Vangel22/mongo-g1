const express = require("express");
const {
  getAllUsers,
  getOneUser,
  getSortedByName,
  getUserByEmail,
  createUser,
  updateUser,
  removeUser,
} = require("./controllers/user");

//ES module
// import {
//     getAllUsers
// } from "./controllers/user"

// po default Node.js koristi CommonJS moduli -> toa znaci deka za da vmetne modul koristi klucen zbor require
// EsModules koristat import - from za vmetnat modul

// const { connect } = require("./db/config");
// connect();

require("./db/config");

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Vo GET baranje mozeme da imame i query i parametar

//get user by surname

app.get("/users", getAllUsers);
app.get("/users/:id", getOneUser);
app.get("/users/sorted", getSortedByName);
app.get("/users/:email", getUserByEmail);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", removeUser);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
