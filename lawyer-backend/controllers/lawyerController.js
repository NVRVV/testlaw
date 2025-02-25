const db = require('../models/db');

exports.getLawyers = (req, res) => {
    db.query('SELECT * FROM lawyers', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
