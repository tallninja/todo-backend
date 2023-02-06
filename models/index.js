const mongoose = require('mongoose');
const Todo = require('./Todo');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, (err) => {
	if (err) console.error('Error Connecting to DB:', err);
	console.log('Connected to DB!');
});

module.exports = { Todo };
