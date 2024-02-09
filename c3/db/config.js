const mongoose = require("mongoose");

const uri = `mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/Semos?retryWrites=true&w=majority`;
//PROTOCOL - USERNAME - PASSWORD - HOST - DB - QUERY_STRING (DB OPTIONS)

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