const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*

This app starts a server and listens on port 3000 for connections. 
The app responds with “Hello World!” for requests to the root URL (/) or route. 
For every other path, it will respond with a 404 Not Found.

The example above is actually a working server: Go ahead and click on the URL shown. 
You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time.

*/