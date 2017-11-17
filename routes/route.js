const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res, next) => {
    res.send('Retrieving the contact list');
});

router.post('/contacts', (req, res, next) => {

});

router.delete('/contacts:id', (req, res, next) => {

});

module.exports = router;