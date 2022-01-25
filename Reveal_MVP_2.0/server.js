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
  });
});


app.get('/about', function(request, response) {
  // let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("about",{
    // data: blog_info,
  });
});


app.get('/survey', function(request, response) {
  // let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("survey.ejs", {
    // data: blog_info,
  });
});


app.get('/companies/:companyname', function(request, response) {

  let totalData = JSON.parse(fs.readFileSync('postgres/data.json', 'utf8'));

  let traData = JSON.parse(fs.readFileSync('data/demo/json/transparency_data.json', 'utf8'));
  let envData = JSON.parse(fs.readFileSync('data/demo/json/environmental_data.json', 'utf8'));
  let rigData = JSON.parse(fs.readFileSync('data/demo/json/rights_data.json', 'utf8'));

  let companyname = request.params.companyname;
  let companyinfo;

  for(let i in totalData){
    if(totalData[i].name==companyname){
      companyinfo = totalData[i];
    }
  }

  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("company", {
      data: companyinfo,
      traData: traData,
      envData: envData,
      rigData: rigData
  });
});



// Because routes/middleware are applied in order, this will act as a default error route in case of an invalid route
app.use("", function(request, response){
  response.status(404);
  response.setHeader('Content-Type', 'text/html')
  response.render("error", {
    "errorCode":"404",
    company: false
    });
});

//..............Start the server...............................//
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Easy server listening for requests on port ' + port + '!');
  console.log('Visit http://localhost:'+port+' to see the website.')
});
