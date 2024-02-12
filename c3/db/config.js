const mongoose = require("mongoose");

const uri = `mongodb+srv://<your_username>:<your_password>@cluster0.12jzasd.mongodb.net/Semos?retryWrites=true&w=majority`;
//PROTOCOL - USERNAME - PASSWORD - HOST - DB - QUERY_STRING (DB OPTIONS)

// fetch("http://localhost:3000/about") => podatoci za about stranata
// fetch("http://localhost:3000/login") => korisnikot e upsesno logiran ili ne

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Mongo connected!");
  } catch (err) {
    console.log(err.message);
  }
}

connect();

// module.exports = {
//   connect,
// };

//So IIFE
// (async () => {
//     try {
//         await mongoose.connect(uri);
//       } catch (err) {
//         console.log(err.message);
//       }
// })();
