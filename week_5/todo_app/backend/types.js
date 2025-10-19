const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(), 
    descriptions: zod.string(), 
})

const updateTodo = zod.object({
    _id: zod.string(), 
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}