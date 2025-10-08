const { Admin } = require("../db");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config")

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    // console.log(token)
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    
    if (decodedValue.username) {
        next();
    } else {
        msg: "You are not authenticated!"
    }
}

module.exports = adminMiddleware;