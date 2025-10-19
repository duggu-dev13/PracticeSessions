const mongoose = require("mongoose");
mongoose.connect("YOUR_MONGO_API")

const todoSchema = mongoose.Schema({
    title: String,
    descriptions: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}