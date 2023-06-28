const mongoose = require("mongoose");



const connectDatabase = () =>{
    mongoose.connect(process.env.LOCAL_MONGO_CONNECTION)
    .then(() => console.log("Connected to database"))
    .catch(err => console.log(`Error encountered while connecting to db: ${err}`));
}

module.exports = connectDatabase;