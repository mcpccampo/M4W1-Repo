// An error handler is similar to middleware except it
// takes 4 arguments:
// (err, req, res, next)
// in that order.

// In order to hit an error handler you'll need a route
// or a piece of middleware that invokes next() with an error
// as an argument. This can be done several ways:
const err = new Error('I am an error');
next(err);

// or

next(new Error('I am an error'));

// Once you have passed an error into next() you will leave
// the current route handler / middleware and begin moving through
// you code, top to bottom, until you reach an error handler. Attaching
// an error to next will skip regular middleware.

// A custom error handler will follow a similar pattern
// to the code below:
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	console.error("ERROR:", err);
	res.json({
		title: err.title || "Server Error",
		message: err.message
	});
});
