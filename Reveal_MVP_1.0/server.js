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
  let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("index",{
    data: blog_info,
    allPosts: blog_info
  });
});


app.get('/about', function(request, response) {
  let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("about",{
    data: blog_info,
    allPosts: blog_info
  });
});


app.get('/blog_post', function(request, response) {
  let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  let auth_info = JSON.parse(fs.readFileSync('data/authors.json', 'utf8'));
  response.status(200);
  response.setHeader('Content-Type', 'text/html')
  response.render("blog_post",{
    allPosts: blog_info,
    validAuthors: auth_info
  });
});


app.get('/blog/:blogname', function(request, response) {
  let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  let auth_info = JSON.parse(fs.readFileSync('data/authors.json', 'utf8'));
  let blogname = request.params.blogname.replace("_"," ");

 if(blog_info[blogname]){
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("blog_post",{
      allPosts: blog_info,
      post: blogname,
      blog: blog_info[blogname],
      validAuthors: auth_info
    });
  }else{
    response.status(404);
    response.setHeader('Content-Type', 'text/html')
    response.render("error", {
      "errorCode":"404",
    });
   }
});


app.get('/createBlog', function(request, response) {
    let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
    let auth_info = JSON.parse(fs.readFileSync('data/authors.json', 'utf8'));
    response.status(200);
    response.setHeader('Content-Type', 'text/html')
    response.render("blog/createBlog",{
      allPosts: blog_info,
      validAuthors: auth_info
    });
});

app.get('/blog', function(request, response) {
    let author = request.query.name;
    let title = request.query.title;
    let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
    response.redirect("/blog/"+title);
});

app.post('/blog', function(request, response) {
    let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));

    var b = {
        author: request.body.author.trim(),
        title: request.body.title.trim(),
        date: request.body.date.trim(),
        content1: request.body.content1.trim(),
        content2: request.body.content2.trim(),
        comments: request.body.comments
    };

    blog_info[request.body.title.trim()] = b;
    fs.writeFileSync('data/content.json', JSON.stringify(blog_info));

    response.redirect("/");
});

app.post('/blog/like/:blogname/:comment', function(request, response) {
  let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  let blogname = request.params.blogname.replace("_"," ");
  let commentNum = request.params.comment;

  if(blog_info[blogname]){
      if (!blog_info[blogname].comments[commentNum].likes) blog_info[blogname].comments[commentNum].likes = 0;
      blog_info[blogname].comments[commentNum].likes++;

      fs.writeFileSync('data/content.json', JSON.stringify(blog_info));
      response.status(200);
      response.setHeader('Content-Type', 'text/json');
      response.send(blog_info[blogname]);
   }else{
      response.status(404);
      response.setHeader('Content-Type', 'text/json');
      response.send('{results: "no comment"}');
  }
});

app.post('/blog/comment/:blogname', function(request, response) {
  let blog_info = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
  let auth_info = JSON.parse(fs.readFileSync('data/authors.json', 'utf8'));
  let blogname = request.params.blogname.replace("_"," ");
  let commentCount = Object.keys(blog_info[blogname].comments).length

  if(blog_info[blogname]){
      if (!blog_info[blogname].comments[commentCount]) blog_info[blogname].comments[commentCount] = "";
      blog_info[blogname].comments[commentCount]=request.body;

      fs.writeFileSync('data/content.json', JSON.stringify(blog_info));
      response.status(200);
      response.setHeader('Content-Type', 'text/json');
      response.send(blog_info[blogname].comments);
   }else{
      response.status(404);
      response.setHeader('Content-Type', 'text/json');
      response.send('{results: "no comment"}');
  }
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
