A Simple REST API
=================

**Description:**
 * Output is in json format
 * Status is "error" (400) if required argument is missing or invalid;
 * Otherwise, status is "ok" (200)
 * If status is "error", numbers array will be empty
 * Numbers is an array of all integers between and including 1 and max_value that are divisible by 3 if word is "fizz", 5 if word is "buzz", and by both 3 and 5 if word is "fizzbuzz"
 * Array should be in ascending order

**Status:** Working  

**Target system:** Linux  

**Notes:**
 * `/api?word=fizz&max_value=30` doesn't work but `/api/word=fizz&max_value=30` works
 * Failed case: If required argument is missing, status is "error"

**Sample run:**  
_install dependencies_  
npm install  
_run_  
node app.js  
_go to browser_  
localhost:3000/api/word=fizzbuzz&max_value=30

**References:**
 * NodeJS > Docs
 * Lynda > Building a Website with Node.js and Express.js
 * Lynda > Node.js Essential Training
