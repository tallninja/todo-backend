require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	return res.status(200).json({ message: 'Todo Backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log('Server listening on:', `http://localhost:${PORT}/`);
});
