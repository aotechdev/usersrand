const mongoose = require("mongoose");
const uri = "mongodb+srv://usecase:paul@cluster0.iiuwt.mongodb.net/Mobiles";

const database = async() => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const conn = mongoose.connection;
        conn.once("open", async() => {
            console.log("Connected to the database")
        })
    } catch(err) {
         conn.on("error", (err) => {
            console.log(err)
        })
        console.log(err)
    }
}

module.exports = database;