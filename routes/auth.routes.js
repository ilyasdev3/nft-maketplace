const express = require("express");
const router = express.Router();
const { authState } = require("../middlewares/authState.middleware");

const { registerUser, loginUser } = require("../controllers/auth.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
