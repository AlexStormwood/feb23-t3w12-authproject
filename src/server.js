const express = require('express');

// make a server instance 
const app = express();

const cors = require('cors');
const corsOptions = {
	origin: ["http://localhost:3000", "https://someDeployedWebsite.com"],
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Enables request.body to be raw JSON data 
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