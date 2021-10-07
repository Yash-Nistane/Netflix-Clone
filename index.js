const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

try {
  mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to atlas")
  );
} catch (error) {
  console.log(error);
}

app.use(express.json());

const authRoute = require('./routes/auth');


app.use("/api/auth",authRoute);

app.listen(8800, () => {
  console.log("Backend running on 8800 !");
});
