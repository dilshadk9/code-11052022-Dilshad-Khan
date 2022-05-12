const express = require("express");
const app = express();
const port = 4000;
const bmiServices = require("./bmi-services");

app.get("/api/bmi", function (req, res) {
  const response = bmiServices.getData();
  res.send(response);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});


module.exports = app;