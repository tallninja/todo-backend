require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./models');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	return res.status(200).json({ message: 'Todo Backend' });
});

const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log('Server listening on:', `http://localhost:${PORT}/`);
});
