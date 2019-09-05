const express = require('express');

const router = express.Router();


//GET to /posts/:id
router.get('/', (req, res) => {
    res.send('get to /posts/')

});

//GET to /posts/:id
router.get('/:id', (req, res) => {

    const { id } = req.params;

    res.send(`get to /posts/${id}`)

});


router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;