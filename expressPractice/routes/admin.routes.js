const express = require('express');
const router = express.Router();

router.get('/config', (req, res, next)=>{
    res.send('Config')
})

router.get('/permissions', (req,res,next)=>{
    res.send('Permissions')
})

module.exports = router;