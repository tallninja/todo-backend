const router = require('express').Router();
const { getTodos } = require('../controllers/todo.controller');

router.get('/', getTodos);

module.exports = router;
