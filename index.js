const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(
    `Hello world from a Zero2Hero Node.js app! Server time: ${new Date()}`
  );
});
app.listen(3000, () => {
  console.log("Server is up on 3000");
});
