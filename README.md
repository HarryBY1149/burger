# burger
Eat Da Burger!

A simple MySQL backed app to keep track of all the amazing burgers you've eaten!

Also my first attempt at a proper web application with MCV architecture.

Follows fairly standard MCV practices, all of the functions are super simple so it's pretty easy to trace.

The Public folder houses the client facing assets, that burger.js file calls the routes in burgers_controller.js

burgers_controller.js accepts the front end data, adds a callback function (error stuff mostly), and passes it to the model burger.js.

The model takes the data and function and passes it to the orm, which performs a database function then passes a response back up the chain.

TA_DA! EAT DA BURGER!


