const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "123456";

const app = express();
app.use(express.json()) // Throws Error for Body contents

const ALL_USERS = [
    {
        username: "Vaibhav@gmail.com",
        password: "123",
        name: "Vaibhav Sonawane"
    },
    {
        username: "Harkirat@gmail.com",
        password: "456",
        name: "Harkirat Singh"
    },
    {
        username: "Milind@gmail.com",
        password: "789",
        name: "Milind Sonawane"
    }
]

function userExists(username, password) {
    let userExist = false;
    for(let i = 0; i < ALL_USERS.length; i++){
        if(username == ALL_USERS[i].username && password == ALL_USERS[i].password){
            userExist = true
        }
    }
    return userExist;
}

app.post("/singin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exists in our in memory db"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
})

app.get("/users", function(req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
            users: ALL_USERS.filter(function(value){
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