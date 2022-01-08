const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://sa:sa123@cluster0.7q8er.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlparser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connect mongo");
  });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Running");
});
