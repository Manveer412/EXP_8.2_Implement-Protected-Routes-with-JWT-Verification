const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log(`Server is running successfully at http://localhost:5000`);
});
