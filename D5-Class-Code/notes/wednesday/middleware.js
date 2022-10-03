// Express middleware is essentially functions that have
// access to the request(req) and response(res) objects.

// A middleware function take 3 arguments, they are:
// req - request object
// res - response object
// next - The next widdleware function

// Calling next() inside middleware will allow your request
// to continue on it's way to the next middleware
// note: this is different than calling next(error)
// which is covered in the error-handling.js notes.

// Middleware can be an anonymous function or named:
// Named:
const middlewareFunc = (req, res, next) => {
	console.log(req);
	next();
};
app.use(middlewareFunc);

// anonymous:
app.use((req, res, next) => {
	console.log(req);
	next();
});

// Both functions above will achieve the same result

// Middleware can be implemented / bound in two different
// manners, in a route handler or using app.use:
const middleFunc = (req, res, next) => {
	console.log(req);
	next();
};

// using function above in app.use:
app.use(middleFunc);
// using function above in route handler:
app.get("/", middleFunc, (req, res) => {});
// Notice that in the route handler above the route
// pattern, middleware and callback function are
// separated by commas.

// Middleware can also be an array of functions
// that can be written in several different ways:

// Two named functions
app.use([function1, function2]);

// Two anonymous functions:
app.use([
	(req, res, next) => {
		console.log(req);
		next();
	},
	(req, res, next) => {
		console.log(res);
		next();
	},
]);
