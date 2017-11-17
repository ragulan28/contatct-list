const express = require('express');
const router = express.Router();

const contact = require('../models/contacts');

router.get('/contacts', (req, res, next) => {
    contact.find((err, contacts) => {
        res.json(contacts);
    });
});

router.post('/contacts', (req, res, next) => {
    let newContact = new contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Fail to add contact' });
        } else {
            res.json({ msg: 'contact added successfully' });
        }
    });

});

router.delete('/contacts/:id', (req, res, next) => {
    contact.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;