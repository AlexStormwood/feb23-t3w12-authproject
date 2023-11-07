const express = require('express');

// make a server instance 
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});

const userController = require('./controllers/UserController');
app.use("/users", userController);

module.exports = {
	app
}