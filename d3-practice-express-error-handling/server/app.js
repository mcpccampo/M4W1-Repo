const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("GET / This is the root URL");
});

app.use((req, res, next) => {
	const err = new Error("Sorry, the requested resource couldn't be found");
	err.status = 404;
	err.title = "Resource not found";
	next(err);
});

app.use((err, req, res, next) => {
	res.status = err.status || 500;
	res.json({
		message: err.message || "Server error",
		title: err.title || "Server error",
    // stack: err.stack
	});
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
