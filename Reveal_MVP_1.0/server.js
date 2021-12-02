//..............Include Express..................................//
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

//..............Create an Express server object..................//
const app = express();

//..............Apply Express middleware to the server object....//
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//.............Define server routes..............................//
//Express checks routes in the order in which they are defined

app.get('/', function(request, response) {
  // let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("index",{
    // data: blog_info,
    // allPosts: blog_info
  });
});


app.get('/about', function(request, response) {
  // let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("about",{
    // data: blog_info,
    // allPosts: blog_info
  });
});

// Because routes/middleware are applied in order, this will act as a default error route in case of an invalid route
app.use("", function(request, response){
  response.status(404);
  response.setHeader('Content-Type', 'text/html')
  response.render("error", {
    "errorCode":"404",
    });
});

//..............Start the server...............................//
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Easy server listening for requests on port ' + port + '!');
  console.log('Visit http://localhost:'+port+' to see the website.')
});
