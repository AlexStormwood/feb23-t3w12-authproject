const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function comparePassword(plaintextPassword, hashedPassword) { 
	let doesPasswordMatch = false;

	doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);

	return doesPasswordMatch;
}

function generateJwt(userId){

	let newJwt = jwt.sign(
		// Payload
		{
			userId
		}, 

		// Secret key for server-only verification
		"insert secret key here",

		// Options
		{
			expiresIn: "7d"
		}

	);

	return newJwt;
}


module.exports = {
	comparePassword, generateJwt
}