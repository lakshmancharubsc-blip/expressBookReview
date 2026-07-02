const express = require('express');
const axios = require('axios');
const router = express.Router();

// Get all books (async/await)
router.get('/async/books', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get book by ISBN
router.get('/async/isbn/:isbn', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/isbn/${req.params.isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by author
router.get('/async/author/:author', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/author/${req.params.author}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by title
router.get('/async/title/:title', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:5000/title/${req.params.title}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
