const express = require('express');
const postRouter = require('./posts/postRouter.js')



const server = express();


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//global middleware
// server.use(express.json());

server.use('/posts', postRouter); // if you dont add the '/posts' string at the begining its going to apply it to every request. if you add it will add it to the url

//custom middleware

// function logger(req, res, next) {
// };

//router handlers

server.get('/', (req, res) => {
  res.status(200).json({ api: '...up' })
})



module.exports = server;


