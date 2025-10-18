const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin-devs:Duggu%401308@100x-devs-db.iugbonm.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    descriptions: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}