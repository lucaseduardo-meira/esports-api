const express = require("express");
// const prevgameslol = require("../crawler/prevgamesLol");

const app = express();

app.get("/", (req, res) => {
  res.send("ok");
});

// app.get("/antigas/lol", (req, res) => {
//   prevgameslol();
// });

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost/3000")
);
