const express = require('express');

const app = express();

app.get('/health-checkup', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if((username != "duggu" || password != "123") || (kidneyId != 1 && kidneyId != 2)) {
        res.status(404).json({
            msg: "You are not allowed"
        })
    } else {
        res.status(200).json({
            msg: "you are allowed"
        })
    }
})


app.listen(3000)