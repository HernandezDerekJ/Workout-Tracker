const express = require("express");
const mongoose  = require("mongoose");
const logger = require("morgan");
const app = express();
const path = require('path');

const PORT = process.env.PORT||3001;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsDB",
 { 
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true,
});

app.use(require('./routes/api.js'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"), )
});
app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
});
app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"), )
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
 
