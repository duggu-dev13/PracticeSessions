const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken")
const router = Router();
// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password,
    })

    res.json({
        msg: "User Created successfully!"
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

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // Use zod
    const newCourse = await Course.create({
        title, 
        description,
        imageLink,
        price
    })

    // console.log(newCourse);
    
    res.json({
        msg: "Course create successfully!", courseID: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});

    res.json({
        course: response
    })
});

module.exports = router;