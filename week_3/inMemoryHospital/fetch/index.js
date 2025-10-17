const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = "123456";


const app = express();
app.use(express.json()) // Throws Error for Body contents

mongoose.connect("YOUR MONGODB CONNECTION STRING");

const User = mongoose.model("users", {username: String, password: String, name: String});

function userExists(username, existingUsers) {
    let userExist = false;
    for(let i = 0; i < existingUsers.length; i++){
        if(username == existingUsers[i].username){
            userExist = true
        }
    }
    return userExist;
}

app.post("/singin", async function(req, res) {
    const username = req.body.username;
    const existingUsers = await User.find()
    if(!userExists(username, existingUsers)) {
        return res.status(403).json({
            msg: "User doesnt exists in our in memory db"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
})

app.post("/singup", async function(req, res) {
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
    const existingUsers = await User.find()
    
    if(!userExists(username, existingUsers)) {
        const newUser = new User({
            "username": username,
            "password": password,
            "name": name
        })

        newUser.save().then(function(){
            res.json({
                msg: "New user Added"
            })
        })
    } else {
        res.json({
            msg: "User already exists"
        })
    }
})

app.get("/users", async function(req, res) {
    const token = req.headers.authorization;
    const existingUsers = await User.find()

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        
        res.json({
            users: existingUsers.filter(function(value){
                if(value.username == username) {
                    return false;
                } else {
                    return true;
                }
            })
        })
    }
    catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
})

app.listen(3000, function(){
    console.log("listening on port 3000");
})

// Got back in response following token:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZhaWJoYXZAZ21haWwuY29tIiwiaWF0IjoxNzU5NDE3NDM1fQ.DYq75jTAMc0I0T46pwSA2--66TLkiIcyn36YdmgRfwY

// now validate it on jwt.io for more info