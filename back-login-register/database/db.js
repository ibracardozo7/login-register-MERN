const mongoose = require('mongoose')

const MONGO_URL = "mongodb://localhost/autenticacionLocal"

const db = async () => {
   await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
   })
   .then(() => console.log("DB FUNCIONANDO"))
   .catch((error) => console.error(error))
}

module.exports = db