const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentsRouter = require("./routes/students");

const app = express();
const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/school", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
