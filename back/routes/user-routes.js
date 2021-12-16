//import express
const express = require('express');
//import bcrypt module
const bcrypt = require('bcrypt');

const User = require("../models/user");
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
const router = express.Router();
const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
router.post("/signup",multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here signup user with monogo', req.body);
    let url = req.protocol + "://" + req.get('host');

    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {
            console.log(`${req.body.pwd}#${cryptedPwd}`)
        
            // validator.validate(req.body.email) 
            if (emailRegexp.test(req.body.email)) {
                let userObject = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    pwd: cryptedPwd,
                    tel: req.body.tel,
                    role: req.body.role,
                    img : url + "/images/" + req.file.filename

                });
                userObject.save((err, result) => {
                    if (err) {
                        console.log('error with BD user', err);
                        if (err.errors.email) {
                            res.status(200).json({
                                message: 'email exist'
                            })
                        }
                    } else {
                        console.log('result user after save', result)
                        res.status(200).json({
                            message: "user is added sucessfull",
                            insertedUser: result

                        });

                    }
                });

            } else {
                res.status(200).json({
                    message: `error with data user`

                });
            }
        }
    )
});
router.get('/signup', (req, res) => {
    console.log('here into all users');
    User.find((err, docs) => {
        if (err) {
            console.log("error with db");
        } else {

            res.status(200).json({
                users: docs
            });
        }

    })
});
router.get('/:id', (req, res) => {
    console.log('here into get course by id', req.params.id);
    // findOne by price {price:req.params.price }
    Course.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Here result after find by id ', result);
            if (result) {
                res.status(200).json({
                    findedUser: result
                });
            } else {
                res.status(200).json({
                    messages: `Not found by ID =${req.params.id}`
                });
            }
        }
    )
});
router.delete('/signup/:id', (req, res) => {
    //  console.log("here into teacher by id", req.params.teacher);
    console.log("here into delete user by id", req.params.id);

    User.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log("here in result after delete", result);
            if (result.deletedCount == 1) {
                res.status(200).json({
                    message: "USER deleted successfully"
                });
            } else {
                res.status(200).json({
                    message: "USER id does not exist"
                });
            }
        }
    )




});
router.post('/login', (req, res) => {
    console.log('Here into login', req.body);
    User.findOne({ email: req.body.email }).then(
        (result) => {
            if (!result) {
                res.status(200).json({
                    message: 'Please check Email'
                })
            } else {
                let pwdResult = bcrypt.compare(req.body.pwd, result.pwd);
                console.log('pwdResult', pwdResult);
                pwdResult.then(
                    (status) => {
                        console.log('Here status', status);
                        if (status) {
                            User.findOne({ email: req.body.email }).then(
                                (finalResult) => {
                                    
                                    let userToSend = {
                                        firstName: finalResult.firstName,
                                        lastName: finalResult.lastName,
                                        role: finalResult.role,
                                        id: finalResult.id,
                                    }

                                    res.status(200).json({

                                        message: 'Welcome',
                                        user: userToSend
                                    });
                                });
                        } else {
                            res.status(200).json({
                                message: 'Please check Pwd'
                            });
                        }
                    }
                )
            }
        }
    )
});
module.exports = router;
