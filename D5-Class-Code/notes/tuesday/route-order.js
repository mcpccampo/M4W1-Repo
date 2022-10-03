// Route order matters and so does middleware order.

// Consider the following scenario:
app.get('/', (req, res) => {
    const { stuff, otherStuff } = req.body;
    console.log(stuff);
})

app.use(express.json());
// In this scenario we have a route attempting to access the
// request body. We have an issue though. The route is attempting
// to access the req.body before we've used the express.json
// middleware. This means we won't be able to access the 
// request body.