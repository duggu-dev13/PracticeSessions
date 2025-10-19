const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors  = require("cors");


const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
    }))

app.post("/todo", async function(req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs!"
       })
       return;
    }

    // Put it in mongodb
    await todo.create({
        title: createPayLoad.title,
        descriptions: createPayLoad.descriptions
    })

    res.json({
        msg: "Todo added in the database!"
    })
});

app.get("/todos", async function(req, res) {
    const todos = await todo.find();
    // console.log(todos)
    res.json({
        todos
    })
});

app.put("/completed", async function(req, res) {
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs!"
        })
        return;
    }
    await todo.findByIdAndUpdate({
        _id: updatePayLoad._id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed!"
    })


});

app.listen(3000, function() {
    console.log("server stared at 3000");
});