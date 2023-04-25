const mongoose = require('mongoose')
import "dotenv/config"

// const MONGO_URL = "mongodb://localhost/autenticacionLocal"

const db = async () => {
   await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
   })
   .then(() => console.log("DB FUNCIONANDO"))
   .catch((error) => console.error(error))
}

module.exports = db