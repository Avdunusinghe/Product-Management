const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://sa:sa123@cluster0.7q8er.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlparser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connect mongo");
  });

app.use("/api/product", require("./routes/Product.route"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is Running");
});
