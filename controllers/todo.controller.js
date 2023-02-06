const { Todo } = require('../models');

const createTodo = async (req, res) => {
	try {
		const todo = await new Todo({ ...req.body, createdAt: new Date() }).save();
		console.log('Created a new Todo');
		return res.status(200).json(todo);
	} catch (error) {
		console.log('Error:', error);
		return res.status(500).json({ error });
	}
};

const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		return res.status(200).json(todos);
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error });
	}
};

const getTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (!todo) return res.status(404).json({ error: 'Todo Not Found' });
		return res.status(200).json(todo);
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error });
	}
};

const editTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		if (!todo) return res.status(404).json({ error: 'Todo Not Found' });
		await todo.updateOne({
			$set: { ...req.body, updatedAt: new Date() },
		});
		const editedTodo = await Todo.findById(todo._id);
		return res.status(200).json(editedTodo);
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error });
	}
};

const deleteTodo = async (req, res) => {
	try {
		let todo = await Todo.findById(req.params.id);
		if (!todo) return res.status(404).json({ error: 'Todo Not Found' });
		await todo.deleteOne();
		return res.status(200).json({ message: 'Todo deleted' });
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ error });
	}
};

module.exports = { createTodo, getTodos, getTodo, editTodo, deleteTodo };
