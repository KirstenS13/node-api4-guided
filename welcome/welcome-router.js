const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		// process.env.COHORT lets us access the environment variable we set in package.json under the watch script
		// the value of process.env.COHORT is in the environment
		// it's not in this file, but it's still in package.json
		message: `Welcome ${process.env.COHORT}`,
		fact: process.env.FUN_FACT || "I have no fun facts."
	})
})

module.exports = router
