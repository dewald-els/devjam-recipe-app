const axios = require("axios");
const express = require("express");
const app = express();
const { PORT = 8080 } = process.env;
const dotenv = require("dotenv");
const cors = require("cors");

const cache = new Map();

if (process.env.NODE_ENV !== "production") {
	dotenv.config();
}

const API_KEY = process.env.SPOONACULAR_API_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./dist/recipe-app"));

app.use((req, res, next) => {
	if (!API_KEY) {
		return res.status(400).json({
			error: "Could not find API Key",
		});
	}
	next();
});

app.get("/api/recipes", async (req, res) => {
	const { ingredient } = req.query;
	const URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient}`;

	if (cache.has(URL)) {
		console.log("Reading from Cache");
		return res.status(200).json(cache.get(URL));
	}

	try {
		const { data } = await axios.get(URL);
		if (!cache.has(URL)) {
			cache.set(URL, data);
		}
		return res.status(200).json(data);
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
});

// Redirect app request to index.html
app.get("/*", (req, res) => {
	res.sendFile("index.html", { root: "dist/recipe-app" });
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
