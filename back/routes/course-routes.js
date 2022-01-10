// import express model
const express = require('express');

// import module multer
const multer = require('multer');
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'back/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// import course mode
const Course = require('../models/course');
// import 
const router = express.Router();

// Business Logic add course
router.post('/',multer({ storage: storage }).single('img'), (req, res) => {
    console.log('req', req.body);
     let url = req.protocol + "://" + req.get('host');
    let courseObject = new Course({
        teacher: req.body.teacher,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        duration: req.body.duration,
        userId:req.body.userId,
        img : url + "/images/" + req.file.filename
    });
    courseObject.save((err, result) => {
        if (err) {
            console.log('error into DB', err);
        } else {
            console.log('result after save', result);
            res.status(200).json({
                message: `Course Added with success`,
                insertedCourse: result
            });
        }
    });
});
// Business Logic Get All courses
router.get('/', (req, res) => {
    console.log('here into req');
    // Find all document from courses
    Course.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            // Docs : array of objects
            res.status(200).json({
                courses: docs
            });
        }
    });

});

// Business Logic find course by ID
router.get('/:id', (req, res) => {
    console.log('here into get course by id', req.params.id);
    // findOne by price {price:req.params.price }
    Course.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Here result after find by id ', result);
            if (result) {
                res.status(200).json({
                    findedCourses: result
                });
            } else {
                res.status(200).json({
                    messages: `Not found by ID =${req.params.id}`
                });
            }
        }
    )
});
// Business Logic find course by connected user
router.get('/myCourse/:userId', (req, res) => {
    console.log('here into get course by userid', req.params.userId);
    // findOne by price {price:req.params.price }
    Course.find({ userId: req.params.userId }).then(
        (result) => {
            console.log('Here result after find by user id ', result);
            if (result) {
                res.status(200).json({
                    findedCoursesbyUser: result
                });
            } else {
                res.status(200).json({
                    messages: `Not found by user ID =${req.params.userId}`
                });
            }
        }
    )
});
// Business Logic delete course by ID
router.delete('/:id', (req, res) => {
    console.log('here into delete course', req.params.id);
    Course.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('here result after delete ', result);
            if (result) {
                Course.find().then(
                    (courses) => {
                        res.status(200).json({
                            courses: courses,
                            messages: `course id: ${req.params.id}deleted with sucful`
                        });
                    }
                )

            } else {
                res.status(200).json({
                    messages: `course id : ${req.params.id} does not exist`
                });
            }
        }
    )

});
// Business Logic update course by ID
router.put('/:id', (req, res) => {
    console.log('here into edit course', req.params.id);
    console.log('here into edit course body', req.body);
    Course.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            console.log('Result after update', result);
            if (result.modifiedCount == 1) {
                res.status(200).json({
                    message: 'course updated'
                });
            } else {
                res.status(200).json({
                    message: 'course does not exist'
                });
            }
        }
    )
});


module.exports = router;