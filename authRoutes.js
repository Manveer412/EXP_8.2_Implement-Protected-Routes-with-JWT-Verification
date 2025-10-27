const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authMiddleware");

// Public Route
router.post("/login", authController.login);

// Protected Route
router.get("/protected", verifyToken, authController.protected);

module.exports = router;
