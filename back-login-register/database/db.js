const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();
// const MONGO_URL = "mongodb://localhost/autenticacionLocal"
const url = process.env.MONGODB_URL

const db = async () => {
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB FUNCIONANDO"))
  .catch((error) => console.error(error))
}

module.exports = db