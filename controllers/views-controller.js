const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home', { user: req.user }));

router.get('/register', (req, res) => res.render('login', { user: req.user }));

//router.get('/login', (req, res) => res.render('login', { user: req.user }));

router.get('/jerky', (req, res) => res.render('order', { user: req.user }));

router.get('/profile', (req, res) => res.render('profile', { user: req.user }));
//router.get('/api/user', (req, res) => res.render('profile', { user: req.user }));

module.exports = router;