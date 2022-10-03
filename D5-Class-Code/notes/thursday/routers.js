// A router is essentially a collection route handlers

// Routers allow developers to break their servers
// code into modular, mountable route handlers.

//  Initializing a router is similar to initializing
// a new app instance of express:
const express = require('express');
const router = express.Router();

// you can then export your router from the file
module.exports = router;

// the router is then ready to be implemented into your app.js
// in app.js:
const routerExample = require('./path/to/router');
app.use('/router', routerExample);

// The code above allows all the routes in the imported
// router to use the /route route pattern without having
// to put them in their route patterns.

// Example:
app.get('/', (req,res) => {

})
// If the route above were nested inside the router
// then the route pattern would actually be /router
// rather than the / we can see in the route pattern.
