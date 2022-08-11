const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const employeeRoute = require("./routes/employee");

const app = express();
const port = process.env.PORT || 9000;

// middlewares

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use("/api", employeeRoute);

// routes
app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
