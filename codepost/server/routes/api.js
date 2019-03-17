const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://avistheripper:Avistheripper1992@ds125388.mlab.com:25388/codepostnet";

mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
    err 
        ? console.log(`Error: ${err}`)
        : console.log('Connected to mongo!')
});

router.get('/posts', (req, res) => {
    post.find({})
        .exec((err, posts) => {
            if(err) {
                console.warn('Error occurred');
                res.send(404);
            } else {
                res.json(posts)
            }
        })
});

module.exports = router;