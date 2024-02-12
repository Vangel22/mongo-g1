const {
  getAll,
  getAllSortedByName,
  getById,
  getByEmail,
  create,
  remove,
} = require("../models/user");

//get user by surname

// localhost:3000/users -> sme ja kliknale
// vo index imam definirano /users ruta so GET method koj ja povikuva
// getAllUsers funkcijata vo kontrolerot
// getAllUsers funkcijata ja povikuva funkcijata getAll vo modelot

// fullfiled, pending, rejected
// Promise((resolve, reject) => { if(greska) reject() else resolve()})

// resolve === try
// reject === catch

const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).send(users); //ovde zavrsuva baranjeto
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!"); // a dokolku ima greska zavrsuva ovde
  }
};

const getSortedByName = async (req, res) => {
  try {
    const sortedUsers = await getAllSortedByName();
    res.status(200).send(sortedUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const getOneUser = async (req, res) => {
  try {
    // ? -> query
    // :id -> params
    const user = await getById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const user = await getByEmail(req.params.email);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const createUser = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("User created!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

//users/:id
const updateUser = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    res.status(204).send(`User updated: ${req.params.id}!`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

const removeUser = async (req, res) => {
  try {
    await remove(req.params.id);
    res.status(204).send(`User deleted: ${req.params.id}!`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getAllUsers,
  getSortedByName,
  getOneUser,
  getUserByEmail,
  createUser,
  updateUser,
  removeUser,
};
