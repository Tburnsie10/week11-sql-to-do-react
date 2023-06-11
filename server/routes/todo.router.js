const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req,res) => {
    pool.query('SELECT * FROM todo;')
    .then(data => {
        res.send(data.rows)})
});
// POST
router.post('/', (req,res) => {
    const newTask = req.body;
    console.log(newTask);
    pool.query(`
        INSERT INTO todo (
            name,
            description,
            duration,
            date_added,
            type
        )
        values('${newTask.name}', '${newTask.description}', '${newTask.duration}', '${newTask.date_added}', '${newTask.type}');
    `)

})

// PUT

// DELETE

module.exports = router;
