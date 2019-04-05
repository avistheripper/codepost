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
router.post('/posts', (req, res) => {
    const { title, url, description } = req.body;
    new post({
        title,
        url,
        description
    })
    .save()
    .then(res.redirect('/'))
    .catch(err => console.warn(err));
});
router.get('/details/:id', (req, res) => {
    post.findById(req.params.id)
        .exec((err, post) => {
            if(err) {
                console.warn('Error occurred');
                res.send(404);
            } else {
                res.json(post)
            }
        })
});

module.exports = router;