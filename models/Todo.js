const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	done: { type: Boolean, default: false },
	createdAt: { type: Date },
	updatedAt: { type: Date },
});

module.exports = mongoose.model('todos', TodoSchema);
