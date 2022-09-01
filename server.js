const express = require("express");
const lol = require("./crawler/lol");
const cs = require("./crawler/csgo");
const valorant = require("./crawler/valorant");
const r6 = require("./crawler/r6");

const app = express();

app.get("/", (req, res) => {
  return res.send("ok");
});

app.get("/antigas/lol", (req, res) => {
  lol.prevgameslol(req, res);
});

app.get("/proximas/lol", (req, res) => {
  lol.nextgameslol(req, res);
});

app.get("/antigas/csgo", (req, res) => {
  cs.prevgamescsgo(req, res);
});

app.get("/proximas/csgo", (req, res) => {
  cs.nextgamescsgo(req, res);
});

app.get("/antigas/valorant", (req, res) => {
  valorant.prevgamesval(req, res);
});

app.get("/proximas/valorant", (req, res) => {
  valorant.nextgamesval(req, res);
});

app.get("/antigas/r6", (req, res) => {
  r6.prevgamesr6(req, res);
});

app.get("/proximas/r6", (req, res) => {
  r6.nextgamesr6(req, res);
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost/3000")
);
