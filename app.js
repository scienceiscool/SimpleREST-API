var express = require('express'); // add the express module

var app = express();

app.get('/', function(req, res) {
  res.send('Welcome home');
});

app.get('/api/word=:fizzAndOrBuzz&max_value=:maxVal', function(req, res) {
  var fizzAndOrBuzz = req.params.fizzAndOrBuzz;
  var maxVal = req.params.maxVal;
  var numbers = [];

  // making sure input is valid before moving on
  if ((fizzAndOrBuzz == "fizz" || fizzAndOrBuzz == "buzz" || fizzAndOrBuzz == "fizzbuzz") && (maxVal > 0)) {
    if (fizzAndOrBuzz == "fizz") {
      // adding 3 to get all integers divisible by 3
      for (var step = 0; step <= maxVal; step += 3) {
        if (step != 0) {
          numbers.push(step);
        }
      }
    } else if (fizzAndOrBuzz == "buzz") {
      // adding 5 to get all integers divisible by 5
      for (var step = 0; step <= maxVal; step += 5) {
        if (step != 0) {
          numbers.push(step);
        }
      }
    } else {
      // adding 15 to get all integers divisible by 3 and 5
      for (var step = 0; step <= maxVal; step += 15) {
        if (step != 0) {
          numbers.push(step);
        }
      }
    }
    res.json({"status": "ok", "numbers": numbers});
  } else {
    res.json({"status": "error", "numbers": []});
  }
});

// if any other route that it doesn't recognize
app.get('*', function(req, res) {
  res.send('Bad route');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

/*
var http = require('http'); // add the http module

var myServer = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type" : "application/json"});
  response.write("Hi");
  response.end();
}); // create a server

myServer.listen(3000);

console.log("Go to localhost:3000");
*/
