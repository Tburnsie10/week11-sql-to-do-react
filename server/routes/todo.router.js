const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req,res) => {
    pool.query('SELECT * FROM todo;')
    .then(data => {
        res.send(data.rows)
        
    })
        
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
            type,
            complete
        )
        values('${newTask.name}', '${newTask.description}', '${newTask.duration}', '${newTask.date_added}', '${newTask.type}', '${newTask.complete}');
    `)

})

// PUT
router.put('/', (req,res) => {
    const name = req.body.id;
    console.log(name);
    pool.query(`
    UPDATE todo
    SET complete = True
    WHERE name = '${name}';

    `) 

})



// DELETE

router.delete('/:name', (req,res) => {
    const newTask = req.params.name;
    console.log(newTask);
    res.sendStatus(201)
     pool.query(`
        DELETE FROM todo WHERE name = '${newTask}';`)
        

})


module.exports = router;
