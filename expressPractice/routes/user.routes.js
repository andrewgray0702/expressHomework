const express = require('express');
const router = express.Router();

router.get('/posts/:postID', (req, res, next)=>{
    res.send(req.params.userID + " " + req.params.postID);
});
router.get('/settings', (req, res, next)=>{
    res.send('settingsInfo')
});
router.post('/settings', (req, res, next)=>{
    // Functionality to post to settings
})

module.exports = router;