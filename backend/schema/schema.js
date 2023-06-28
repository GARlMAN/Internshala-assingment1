const mongoose = require("mongoose");

//task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    status: {
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model("Tasks", taskSchema);