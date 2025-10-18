const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.get("/todos", function(req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);

    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs!"
       })
       return;
    }

    // Put it in mongodb
});

app.post("/todo", function(req, res) {

});

app.put("/completed", function(req, res) {
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
    }
});



app.listen(3000, {

});