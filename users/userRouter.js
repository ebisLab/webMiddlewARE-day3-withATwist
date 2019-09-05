const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

//GET to /posts
server.get('/', (req, res) => {
    res.status('Get to /posts')
})
//GET to /posts
server.get('/:id', (req, res) => {
    const { id } = req.params
    res.status(`get to /posts/${id}`)
})

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
