const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//environment variables
require("dotenv").config();

const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((connect) => console.log("connected to mongodb..."))
  .catch((e) => console.log("could not connect to mongodb", e));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require("./routes/users");
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
