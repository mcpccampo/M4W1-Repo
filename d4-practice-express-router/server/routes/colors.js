const express = require("express");
const router = express.Router();
// ^^ router can be named anything. Just a variable to represent .Router()

router.get("/", async (req, res) => {
	res.json("GET /colors");
});

router.get("/:name", async (req, res) => {
	const { name } = req.params;
	res.json(`GET /colors/${name}`);
});

router.post("/:name/css-styles", async (req, res) => {
	const { name } = req.params;
	res.json(`POST /colors/${name}/css-styles`);
});

router.delete("/:name/css-styles/:style", async (req, res) => {
	const { name, style } = req.params;
	res.json(`POST /colors/${name}/css-styles/${style}`);
});

module.exports = router;
