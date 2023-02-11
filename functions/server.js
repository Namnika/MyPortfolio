require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

// connect to mongodb
mongoose.set("strictQuery", false); // to ignore mongoose warning
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) throw err;
  console.log("Connected to DB");
  app.listen(PORT, () => console.log("Server is up and running on port 5000!"));
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// server static files
app.use("/", express.static(path.join(__dirname, "public")));

// routes
const contactRouter = require("./routes/contacts.js");
app.use("/", contactRouter);
