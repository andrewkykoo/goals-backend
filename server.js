require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT;
const goalRoutes = require("./routes/goals");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://goals-08ew.onrender.com",
    credentials: true,
  })
);

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/goals", goalRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(port, () => {
      console.log(`connected to db. listening on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
