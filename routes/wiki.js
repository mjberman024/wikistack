const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const layout = require('../views/layout');

router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
  try {
    res.send(layout('this'));
  } catch (e) {
    next(e);
  }
});

router.post('/', (req, res, next) => {
  try {
    res.send();
  } catch (e) {
    next(e);
  }
});

router.get('/add', (req, res, next) => {
  try {
    res.send(addPage());
  } catch (e) {
    next(e);
  }
});

module.exports = router;
