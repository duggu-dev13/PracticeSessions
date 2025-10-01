const express = require('express');

const app = express();

function middleware(req, res, next) {
    if((req.headers.username != "duggu" || req.headers.password != "123") || (req.query.kidneyId != 1 && req.query.kidneyId != 2)) {
        res.status(404).json({
            msg: "You are not allowed"
        })
    } else {
        res.status(200).json({
            msg: "you are allowed"
        })
        next()
    }
}

app.get('/health-checkup', middleware, function(req, res) {
    res.json({
        msg: "This is how you roll!!"
    })
    
})

app.use(function(err, req, res, next) {
    res.json({
        msg: "This is not working"
    });
})


app.listen(3000)