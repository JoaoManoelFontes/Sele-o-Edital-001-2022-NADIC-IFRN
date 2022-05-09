const express = require("express");
const router = require('./routes/router');
const connection = require('./database/connection');
const cors = require('cors');

connection.authenticate().then(() => {
  console.log("database conected")
}).catch((err) => {
  console.log(err);
});

const app = express();

app.use(express.json())
app.use(cors({origin:"http://localhost:3000"}))
app.use('/api', router);

app.listen(3231, () => {
  console.log("server listening on port 3231!");
});
