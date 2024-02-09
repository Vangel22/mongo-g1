const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

{
  /* <form>
    <input name="ime" />
</form>

req.body.ime

const data = {
    name: ime
} */
}

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: {
    // datumot na kreiranje e fiksen so kreiranjeto na korisnikot zatoa koristime immutable: true
    immutable: true,
    type: Date,
    default: () => Date.now(), // se zema datumot vo momentot koga sme ja povikale schemata
    // new Date() -> ke go zema datumot koga se startuval serverot
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobies: [String],
  // dva nacini -> Object or Schema
  //   address: {
  //     street: String,
  //     city: String,
  //   },
  address: addressSchema,
});

const User = mongoose.model("User", userSchema, "users");

// new -> se povikuva konstruktor funkcija
// Obejktno orientirano programiranje
// class User {
//   constructor(data) {
//     // initialize data
//   }
// }

// Create -> data e ustvari req.body
const create = async (data) => {
  const user = new User(data);
  return await user.save(); //save postoi bidejki new User(data); mu ja vrakja
};

const getById = async (id) => {
  return await User.findOne({ _id: id });
  //find().limit(1)
  //.find vo JavaScript go vrakja prviot element koj go ispolnuva uslovot
};

const getByEmail = async (email) => {
  return await User.findOne({ email: email });
  // return await User.findOne({ email })
};

const getAllSortedByName = async () => {
  return await User.find({}).sort({ name: -1 });
  // Sortirani po opagjacki redosled
};

const getAll = async () => {
  return await User.find({});
  //db.users.find({})
};

//data e ustvari req.body
const update = async (id, data) => {
  return await User.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await User.deleteOne({ _id: id });
};

//get user by surname

module.exports = {
  create,
  getById,
  getByEmail,
  getAllSortedByName,
  getAll,
  update,
  remove,
};
