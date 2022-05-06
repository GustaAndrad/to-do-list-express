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

module.exports = router;
