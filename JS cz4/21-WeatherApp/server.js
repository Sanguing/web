const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.get('/api/weather', async (req, res) => {
	const city = req.query.city || 'London';

	try {
		const params = new URLSearchParams({
			q: city,
			appid: process.env.OPENWEATHER_API_KEY,
			units: 'metric',
		});

		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?${params}`,
		);

		if (!response.ok) {
			return res.status(response.status).json({
				error: 'Unable to fetch weather',
			});
		}

		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.status(500).json({
			error: 'Server error',
		});
	}
});

app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
