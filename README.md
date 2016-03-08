A Simple REST API
=================

**Description:**  
 * output is in json format
 * status is "error" (400) if required argument is missing or invalid,
 * otherwise, status is "ok" (200)
 * if status is "error", array will be empty
 * numbers is an array of all integers between and including 1 and max_value that are divisible by 3 if word is "fizz", 5 if word is "buzz", and by both 3 and 5 if word is "fizzbuzz"
 * array should be in ascending order

**Status:** Working  

**Notes:**  
`/api?word=fizz&max_value=30 doesn't work`  
`/api/word=fizz&max_value=30 works`  

**References:**  
 * NodeJS > Docs
 * Lynda > Building a Website with Node.js and Express.js
 * Lynda > Node.js Essential Training
