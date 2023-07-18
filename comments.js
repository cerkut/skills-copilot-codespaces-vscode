// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create route to get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create route to get comments by id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find((comment) => comment.id === id);
    res.json(comment);
});

// Create route to post comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Create route to put comments by id
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const comment = comments.find((comment) => comment.id === id);
    Object.assign(comment, body);
    res.json(comment);
});

// Create route to delete comments by id
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const index = comments.findIndex((comment) => comment.id === id);
    comments.splice(index, 1);
    res.json({ message: `Comment ${id} deleted` });
});

app.listen(port, () => console.log(`Server running on port ${port}`));