// import express module
const express = require('express');
// import module path
const path = require('path');
// create express application

const app = express();

app.use('/images', express.static(path.join('back/images')))

// import mongoose module
const mongoose = require('mongoose');
// connect App to MONGO DB (corpDB:db name)
mongoose.connect('mongodb://localhost:27017/courseDB');

// import body-parser module
const bodyParser = require('body-parser');
// configure body-parser to parse Req Body
app.use(bodyParser.urlencoded({ extended: true }));
// configure body-parser to send JSON response
app.use(bodyParser.json());

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Define Routes
const courseRoutes = require('./routes/course-routes');
const eventRoutes = require('./routes/event-routes');
const userRoutes = require('./routes/user-routes');
const weatherRoutes = require('./routes/weather-routes');



app.use('/api/courses', courseRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/weather', weatherRoutes);
module.exports = app;