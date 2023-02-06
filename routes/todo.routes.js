const router = require('express').Router();
const {
	createTodo,
	getTodos,
	getTodo,
	editTodo,
	deleteTodo,
} = require('../controllers/todo.controller');

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.patch('/:id', editTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
