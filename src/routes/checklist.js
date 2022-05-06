const express = require('express');

const router = express.Router();

router.get('/checklist',(req, res) => {
    console.log('Teste');
    res.send();
})
router.post('/checklist', (req, res) =>{
    console.log(req.body);
    res.status(200).json(req.body);
})

router.get('/checklist/:id', (req, res) =>{
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`)
})

router.put('/checklist/:id', (req, res) =>{
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/checklist/:id', (req, res) =>{
    console.log(req.params.id);
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router;
