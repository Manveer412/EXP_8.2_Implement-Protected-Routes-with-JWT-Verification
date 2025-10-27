const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey";

// Hardcoded user
const user = { username: "admin", password: "12345" };

// Login Controller
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

// Protected Route Controller
exports.protected = (req, res) => {
  res.json({
    message: "Access granted to protected route",
    user: req.user,
  });
};
