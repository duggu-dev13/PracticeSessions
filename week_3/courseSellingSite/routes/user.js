const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        msg: "User created Successfully!"
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const admin = await User.find({
        username,
        password
    });

    if (admin) {
        const token = jwt.sign({
            username,
        }, JWT_SECRET)
    
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Incorrect Email or pass"
        })
    }
});

router.get('/courses', async (req, res) => {
    const response = await Course.find({});

    res.json({
        course: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseID = req.params.courseId;
    const username = req.username;

    User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: courseID
        }
    }).catch(function(e){
        console.log(e);
    })

    res.json({
        msg: "Course purchased successfully!"
    })
    

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    
    const user = await User.findOne({
        username: req.username
    });

    // console.log(user)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourse
        }
    })

    res.json({
        courses: courses
    })

});

module.exports = router