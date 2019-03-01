const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home', { user: req.user }));

router.get('/register', (req, res) => res.render('login', { user: req.user }));

//router.get('/login', (req, res) => res.render('login', { user: req.user }));

router.get('/jerky', (req, res) => res.render('order', { user: req.user }));

module.exports = router;