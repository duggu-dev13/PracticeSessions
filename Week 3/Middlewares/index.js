const express = require('express')

const app = express();

function rideMiddlewareChecker(req, res, next) {
    const age = req.query.age;

    if (age > 18) {
        next();
    } {
        res.json({
            msg: "You are to little for ride, Go Home !!!"
        })
    }
}

app.get("/ride1", rideMiddlewareChecker, function(req, res) {
    res.json({
        msg: "You are welcome for ride"
    })

})

app.listen(3000, function() {
    console.log("App is listening on port 3000")
})