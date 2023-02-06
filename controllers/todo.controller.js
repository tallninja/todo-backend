const { Todo } = require('../models');

const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		return res.status(200).json(todos);
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error });
	}
};

module.exports = { getTodos };
