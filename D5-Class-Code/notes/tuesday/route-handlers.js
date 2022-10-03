const app = require('express')();
// Express route handlers are used to handle requests from
// the client. They follow the pattern below:
app.get('/', (req, res) => {

});

// The code above can be broken down in the following manner:
// app.get tells us that the request method is a get request
// the '/' is the route pattern. After the route pattern is a ','
// which marks the beginning of our callback function which
// in the example above is anonymous. You could also rewrite the
// route handler to look like this:
const routeFunc = (req, res) => {

};
app.get('/', routeFunc);
// When passing in the function for the route handler
// we don't need to invoke it.