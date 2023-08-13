// Create web server
// By: fuchun

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const { check, validationResult } = require('express-validator/check');

// Get all comments
router.get('/', (req, res) => {
    Comment.find()
    .then(comments => {
        res.json(comments);
    })
    .catch(err => {
        res.json(err);
    });
});

// Create a new comment
router.post('/', [
    check('author', 'Author is required').not().isEmpty(),
    check('text', 'Text is required').not().isEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(422).json({errors: errors.array()});
    } else {
        const comment = new Comment({