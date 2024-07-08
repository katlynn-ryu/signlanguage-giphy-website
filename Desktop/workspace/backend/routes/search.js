const express = require('express');
const router = express.Router();
const data = require('../../frontend/src/data'); // Adjust the path as needed

// Search endpoint
router.get('/', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = data.filter(item => 
        item.alt.toLowerCase().includes(query) || 
        item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    res.json(results);
});

module.exports = router;
