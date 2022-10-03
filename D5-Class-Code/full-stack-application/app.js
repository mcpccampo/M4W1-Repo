// fs is a package that will be used for reading
// and writing to our json files.
// const fs = require("fs");
// await JSON.parse(fs.readFileSync("REL PATH"));
// await fs.writeFileSync('REL PATH', DATA);

const express = require("express");
const transactionRouter = require("./routes/transactions.js");
const app = express();

// app.get("/", (req, res) => {
// 	res.send("HEY");
// });

app.use(express.json());
app.use(express.static("public"));
// app.use('/', express.static("public"))

app.use("/transactions", transactionRouter);

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

app.use((err, req, res, next) => {
	res.json({
		status: err.status || 500,
		message: err.message || "Server Error",
	});
});

const port = 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
