const express = require("express");
const nextgameslol = require("./crawler/nextgamesLol");
const prevgameslol = require("./crawler/prevgamesLol");

const app = express();

app.get("/", (req, res) => {
  return res.send("ok");
});

app.get("/antigas/lol", (req, res) => {
  prevgameslol(req, res);
});

app.get("/proximas/lol", (req, res) => {
  nextgameslol(req, res);
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost/3000")
);
