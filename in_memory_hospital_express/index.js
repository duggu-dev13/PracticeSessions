const express = require('express');
const app = express();

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy: false
    },{
        healthy: true
    },{
        healthy: true
    },{
        healthy: true
    }
]
}];

app.use(express.json());

app.get('/', function(req, res) {
    const johnkidneys = users[0].kidneys;
    const numberOfkidneys = johnkidneys.length;
    let numberOfHealtykidneys = 0;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(johnkidneys[i].healthy){
            numberOfHealtykidneys = numberOfHealtykidneys + 1;
        }
    }

    const numberOfUnhealtykidneys = numberOfkidneys - numberOfHealtykidneys 
    res.json({
        johnkidneys,
        numberOfHealtykidneys,
        numberOfUnhealtykidneys
    })
})

app.post("/add_kidney", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    }) 

    res.json({
        msg: "Done!"
    })
})

app.put("/update_kidney", function(req, res) {
    if(isThereAtLeastOneUnhealthyKidney()) {
        for(let i =0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg: "All the kidneys are Good!"
        })
    } else {
        res.status(411).json({
            msg: "All the kidneys are Healthy!"
        })
    }
})

app.delete("/delete_kidney", function(req, res) {
    
    if(isThereAtLeastOneUnhealthyKidney()) {
        const newKidneys = []
        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true,
                })
            }
        }

        users[0].kidneys = newKidneys;
    } else {
        res.status(411).json({
            msg: "you have No Bad Kidney!"
        });
    }
})

function isThereAtLeastOneUnhealthyKidney() {
    let atLeastOneunhealthyKidney = false
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atLeastOneunhealthyKidney = true;
        }
    }
    
    return atLeastOneunhealthyKidney;
}

app.listen(3000)