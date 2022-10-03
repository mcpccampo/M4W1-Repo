// Static files (html, css, images, etc) can be served
// in express using a built in middleware function - express.static

// express.static is implemented just like any other middleware
// function:
app.use('/', express.static('public'));

// The middleware above would serve up static files/directories
// from the 'public' directory at the route '/'

// In this scenario if you had a hello-world.html file in your
// public directory then you would be able to see it 
// by sending a get request to the '/hello-world.html' route.

// It is important to note that this middleware, if you successfully
// get a file, will not continue to other middleware / routes.

// Another example could be serving up files from the 
// assets directory to the /static route:
app.use('/static', express.static('assets'));

// In this scenario if you had a file named image1.jpg
// inside of an assets directory you would be able to 
// access that file by sending a request to
// "/static/image1.jpg"