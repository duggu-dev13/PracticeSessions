const express = require('express');
const zod = require('zod')
const app = express();

const Schema = zod.array(zod.number())

app.use(express.json());

app.get('/health-checkup', function(req, res) {

    const kidneys = req.body.kidneys;
    const response = Schema.safeParse(kidneys);
    
    res.send({
        response
    });
    
})

app.listen(3000)


/**
 * if this is an array of number with atleast 1 input, return true else false.
 * 
 * response:
 * {
 *      email => string => should look like email
 *      password => should be at least 8 letters
 * }
 * 
 * Schema Structure:
 * const schema = zod.object({
 *      email: zod.string().email(),
 *      password: zod.string().min(8)
 * })
 * 
 * Parsing Schema:
 * const response = schema.safeParse(arr)
 * 
*/