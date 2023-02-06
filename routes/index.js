const router = require('express').Router();

router.get('/', (req, res) => {
	return res.status(200).json({ message: 'Todo API' });
});

const todoRoutes = require('./todo.routes');
router.use('/todo', todoRoutes);

module.exports = router;
