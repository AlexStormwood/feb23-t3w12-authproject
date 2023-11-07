// import Express library
const express = require('express');

// make an instance of a Router
const router = express.Router();

// customise the router instance 

// GET localhost:3000/users/
// Expect a response of ALL users in DB: 
/*
	[
		{
			id:
			username:
			whateverOtherUserData: 
		},
		{
			id:
			username:
			whateverOtherUserData: 
		},
		{
			id:
			username:
			whateverOtherUserData: 
		}
	]
*/
router.get("/", async (request, response) => {

})

// GET localhost:3000/users/laijhjsdaljfdhbsal
router.get("/:id", async (request, response) => {

})

// POST localhost:3000/users/
router.post("/", async (request, response) => {

})

// POST localhost:3000/users/login
// request.body = {username: "admin", password: "Password1"}
// respond with {jwt: "laskdnalksfdnal;fgvkmsngb;sklnmb", valid: true}
router.post("/login", async (request, response) => {

})

// GET localhost:3000/users/verify
// JWT in request.headers["jwt"] or request.headers["authorization"]
// respond with {jwt: "laskdnalksfdnal;fgvkmsngb;sklnmb", valid: true}
router.get("/verify", async (request, response) => {

})

// GET localhost:3000/users/regenerate
// JWT in request.headers["jwt"] or request.headers["authorization"]
// respond with {jwt: "laskdnalksfdnal;fgvkmsngb;sklnmb", valid: true}
router.get("/regenerate", async (request, response) => {

})

module.exports = router;