const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute = require("./routes/posts");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/posts", postRoute);

const CONNECTION_URL =
  "mongodb+srv://trevor:trevortrinh@cluster0.px6on.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

/*
    This make sure we don't have any warning in the console
*/
mongoose.set("useFindAndModify", false);
