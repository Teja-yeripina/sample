const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/data", (req, res) => {
  res.send("GET request received at /data");
});

app.post("/data", (req, res) => {
  const { name, email } = req.body;
  console.log(`Received data: Name - ${name}, Email - ${email}`);
  res.send(`Received data: Name - ${name}, Email - ${email}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
