require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(__dirname + "/public/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.socket.remoteAddress,
    language: req.get("accept-language"),
    software: req.get("user-agent"),
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + this.address().port);
});
